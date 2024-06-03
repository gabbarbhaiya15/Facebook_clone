import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Story.css';
import Data from "./data";
 export default function Story({smimage,lgimage,fname}){
    return(
        <div>
          
                    <div className='boxp'>
                    <div class="card" >
  <img src= {lgimage} class="card-img-top" alt="..."  id="story2"/>
   <img src={smimage} alt='' id="add1"/>
   <h5 class="text">{fname}</h5>
</div>
                    </div>
                  </div>  
        
    );
 }