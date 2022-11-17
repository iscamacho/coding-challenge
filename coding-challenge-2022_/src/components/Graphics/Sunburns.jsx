import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {selected} from '../../store/slices/dataSlice';

const width = 500;  
const height = 500;
const radius = Math.min(width, height) / 2;  
const color = d3.scaleOrdinal(d3.schemeCategory20b);


const  computeTextRotation = (d) => {
    var angle = (d.x0 + d.x1) / Math.PI * 90;

    // Avoid upside-down labels
    return (angle < 120 || angle > 270) ? angle : angle + 180;  // labels as rims
    // return (angle < 180) ? angle - 90 : angle + 90;  // labels as spokes
}

export const Sunburns = ({selectedItem}) => {  
    const {nodeData} = useSelector(state => state.dataJson);
    const dispatch = useDispatch();

    const changeColor = (e) =>{
        let newJSon = JSON.parse(JSON.stringify({...nodeData}));
        
        newJSon.children?.map(nivel1 =>{
            if(nivel1.name == e.data.name)    
                 nivel1.selected = true
            else
                nivel1.selected = false
            
            nivel1.children?.map(nivel2 =>{
                if(nivel2.name == e.data.name)    
                     nivel2.selected = true
                else
                    nivel2.selected = false
            
            })

        });
            dispatch(selected(newJSon));  
        
    }

    useEffect(() => {

        var nodeData1 = {...nodeData};
        
        if(!nodeData1)return;
        // Variables
        var width = 300;
        var height = 300;
        var radius = Math.min(width, height) / 2;
        var color = d3.scaleOrdinal(d3.schemeCategory20b);
    
        var g = d3.select('svg')        
            .attr('width', width)
            .attr('height', height)            
            .append('g')
            .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
    
      
        var partition = d3.partition()
            .size([2 * Math.PI, radius]);
    
        var root = d3.hierarchy(nodeData1)
            .sum(function (d) { return d.gpGanados});
    
       
        partition(root);
        var arc = d3.arc()
            .startAngle(function (d) { return d.x0 })
            .endAngle(function (d) { return d.x1 })
            .innerRadius(function (d) { return d.y0 })
            .outerRadius(function (d) { return d.y1 });

   
       g.selectAll('g')
            .data(root.descendants())
            .enter().append('g').attr("class", "node").append('path').attr("id",(d)=>{return "id-"+d.data.name})
            .attr("display", function (d) { return d.depth ? null : "none"; })
            .attr("d", arc)
            .style('stroke',d => {return '#fff'})

            .style("fill", function (d) { return d.data.selected?"rgba(0,0,0,0.5)":color((d.children ? d : d.parent).data.name); })
            .on("click",e=> {changeColor(e); selectedItem(e)});


      
        g.selectAll(".node")
            .append("text")
            .attr("transform", function(d) {
                return "translate(" + arc.centroid(d) + ")rotate(" + computeTextRotation(d) + ")"; })
            .attr("dx", "-20") // radius margin
            .attr("dy", ".5em") // rotation align
            .text(function(d) { return d.parent ? d.data.name : "" })
            .style("color",d =>{return  d.data.selected?"#FFF":"#000"});

            ;

    
      return () => {
        
      }
    }, [nodeData])
    


  return (
    <svg width={width}></svg>
  )
}
