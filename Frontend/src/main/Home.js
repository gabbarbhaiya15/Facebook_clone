import React from 'react';
import { useState } from 'react';
import image5 from   '../Image/yashraj1.png';
import image14 from  '../Image/reelblack.png';
import image15 from  '../Image/buer.png';
import image16 from  '../Image/add1.png';
import image13 from  '../Image/yashraj1.png';
import image22 from  '../Image/live.png';
import image23 from  '../Image/picture.png';
import image24 from  '../Image/smile.png';
import Postdata from './Postdata';




import MenuBookIcon from '@mui/icons-material/MenuBook';

import Data from './data';
import Datareel from './datareel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';


export default  function Home(){
  const [Black,setBlack]=React.useState("true")
function clicked() {
 setBlack(prevstate=>!prevstate)


}


    return(
      <div class="" id='bigbox'>
        {/* ******** reel and story box********* */}
        <div class="" id="hbox">
            <div class="d-flex " id="box10">
            
            { Black? <div class=" d-flex" id="">
                <></>
                <button class="btn " id="head"  >
                 <MenuBookIcon color="primary" id="icon"/>
                 Stories
                 </button>
                
                 <div className="dactive">
                 <button class="btn " id="read" onClick={clicked}>
                  
                  <img src={image14} alt="" id="reels"/>
                  <h7>Reels</h7>
                  </button>
                  </div>
                  
                  
                    <div className="d-flex" id="boxp">
                    <div class="card" >
                      <img src={image13} class="card-img-top" alt="..."  id="story1"/>
   <img src={image16} alt='' id="add"/>
   
</div>


                    </div>
                   <Data/>
                    
                  </div>
                  
                  :
                  <div class="d-flex" id="">
                    <div class="dactive">
                  <button class="btn " id="head" onClick={clicked} >
                 <MenuBookIcon  id="icon"/> Stories
                 </button>
                  </div>       
                          
                 <button class="btn " id="read">
                  <img src={image15} alt="" id= "reels"/>
                  Reels
                  </button>
                  < div class="active">
                  </div>
                 <Datareel/>             
</div>
}

            </div>
        </div>
        {/* ************** note box ************* */}
        <div class="" id="note">
          <div class="d-flex"  id="">
          <img src={image5} alt=""

id="profile"
/>
          <input  class="rounded-pill" type="text"  placeholder = "  What's on your mind, Yash?"  id="text1" />
          </div>
          < div className="line-2" ></div>
          <div class=""  id="note-icons-box">
          <button className="list-group-item " id="lists">
                 <img src={image22} alt="" id="ball"/>
                Live  Video
              </button>
              <button className="list-group-item " id="lists">
                 <img src={image23} alt="" id="notepic"/>
                Photos
              </button>
              <button className="list-group-item " id="lists">
                 <img src={image24} alt="" id="notepic"/>
                   Activity
              </button>

            
            
          </div>
          </div>

{/*post trial */}
<Postdata/>
<div>



</div>






        </div>
      
    );
}