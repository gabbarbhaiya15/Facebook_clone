import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Reel.css';
import Datareel from "./datareel";
 export default function Reel({lgreel,name}){
    return(
        <div>
          
                    <div className='boxp'>
                    <div class="card" >
  <img src= {lgreel} class="card-img-top" alt="..."  id="reel2"/>
   
   <h5 class="texty">{name}</h5>
</div>
                    </div>
                  </div>  
        
    );
 }