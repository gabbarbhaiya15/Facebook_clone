import React from "react";
import Post from "./Post";
import pdp  from     '../Image/yashraj1.png';
import pimg from     '../Image/yashraj3.png';
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
import hima1 from '../Image/himasm.png';
import hima2 from '../Image/himalg.png';
import './Postdata.css';




export default function Postdata(){
return(
    <div className="list-group" id="list3">
    
    <Post
 pdp={pdp}
 pname= "Yashraj Bhardwaj"
 ptext= "kenpachi"
 pimg={pimg}

/>
    <Post
 pdp={luffy1}
 pname= "Monkey D luffy"
 ptext= "ling of pirate"
 pimg={luffy2}/>

<Post
 pdp={doremon1}
 pname= "Doremon"
 ptext= "Robot"
 pimg={doremon2}/>
     <Post
 pdp={guy1}
 pname= "Might Guy"
 ptext= "lee"
 pimg={guy2}/>

    </div>
    

);
}