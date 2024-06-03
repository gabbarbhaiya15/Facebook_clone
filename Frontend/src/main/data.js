import React from 'react';

import luffy1 from   '../Image/luffylg.png';
import luffy2 from   '../Image/luffysm.png';
import oggy1 from    '../Image/oggysm.png';
import oggy2 from    '../Image/oggylg.png';
import guy1 from     '../Image/guylg.png';
import guy2 from     '../Image/guysm.png';
import chopper1 from '../Image/choppersm.png';
import chopper2 from '../Image/chopperlg.png';
import doremon1 from '../Image/doremonsm.png';
import doremon2 from '../Image/doremonlg.png';
import hima1 from    '../Image/himasm.png';
import hima2 from    '../Image/himalg.png';
import Story from    './story';
export default function Data(){
    
 return(
<div  className="d-flex" id="storyj">
<Story 
        
        smimage= {luffy2}
        lgimage= {luffy1}
        fname = "Luffy"

    />

    
      <Story
        smimage={oggy1}
        lgimage= {oggy2}
        fname ="Oggy"

    />

    <Story
    
        smimage= {guy2}
        lgimage= {guy1}
        fname = "Might Guy"

    />

    <Story
        
        smimage = {chopper1}
        lgimage= {chopper2}
        fname = "Chopper"

    />


        <Story

        
        smimage = {hima1}
        lgimage = {hima2}
        fname = "himawari"

    />
   
</div>
 );  

}