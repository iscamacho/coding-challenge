import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({children}) => {
    const {isLogged} = useSelector((state)=> state.auth);   
    console.log("ddfdf>",isLogged?1:0);  
  return (
    !isLogged?children:<Navigate to="/"></Navigate>
  )
}
