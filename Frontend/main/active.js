import React from "react";
import dot from '../Image/dot.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Active.css';
 export default function Active({dp,dname})
 {
    return(
<div >
<button className="list-group-item d-flex" id="list">

        <img src={dp} alt="" id="asidephoto"/>
        <img src={dot} alt="" id="dot"/>
             {dname}

             </button>
</div>
    );
 }