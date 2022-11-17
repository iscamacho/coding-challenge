import React,{useState} from 'react'
import { DetailsItemSelected } from '../Graphics/DetailsItemSelected'
import { GraficsContent } from '../Graphics/GraficsContent'
import { Footer } from '../Shared/Footer'

export const Home = () => {

    const [itemSelected, setitemSelected] = useState(null);
    const getElement = (e) =>{       
        setitemSelected(e.data);
    }

  return (
    <>  
    <section className='row m-1 '>
        <div className='col-7 col-md-7 col-sm-12 m-1 '>
            <GraficsContent selectedItem={getElement} ></GraficsContent>
        </div>
        <div className='col-5 col-md-4 col-sm-12 m-1'>
            <DetailsItemSelected selectedItem={itemSelected}></DetailsItemSelected>
        </div>
    </section>
    <footer>
        <Footer></Footer>
    </footer>
    </>
  )
}
