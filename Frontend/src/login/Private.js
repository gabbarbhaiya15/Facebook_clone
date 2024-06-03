import React, { useEffect } from 'react';
import { useNavigate,Outlet } from 'react-router-dom';
export default function Private(props){
  const  navigate = useNavigate();
  const { component} = props;
  useEffect( () => {
    let logins = localStorage.getItem('user');
    if (!logins){
        navigate("/");
    }
  }



  )
  return(
    <div>
        <component/>
    </div>
  )
}