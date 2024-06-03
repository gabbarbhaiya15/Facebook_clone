import React from 'react';
import { useState } from 'react';
import Header from './main/Header';
import './App.css';
import Login from './login/Login';
import Private from './login/Private';
import  {BrowserRouter, Route, Routes } from 'react-router-dom';
 
function App(){

  const [Datas, setDatas] = useState(null);

  const handleDataFromChild = (data) => {
    setDatas(data);
  };

  return ( 
<BrowserRouter>
<Routes>
  <Route path='/' element={<Login
   inputs= {handleDataFromChild}
  />}/>

<Route path='/header' element={<Header     
  fname ={Datas}/> }/>
</Routes>

</BrowserRouter>
)}
        
        

export default App;
