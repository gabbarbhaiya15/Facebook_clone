import React from "react";
import Reel from "./Reel";
import reel1 from '../Image/reels1.png'

import reel3 from '../Image/reel3.png';
import reel4 from '../Image/reel4.png';
import reel5 from '../Image/reel5.png';
import reel6 from '../Image/reel6.png';
export default function Datareel(){
    
    return(
   <div  className="d-flex" >
   <Reel 
   lgreel = {reel1}
   
   />
 
   <Reel
   lgreel = {reel3}
   name= "67k"
   />
   <Reel
   lgreel= {reel4}
   name= "50k"
   />
   <Reel
   lgreel= {reel5}
   name= "67k" 
 />
 <Reel
   lgreel=  {reel6}
 name= "67k" 
 />
      
   </div>
    );  
   
   }
