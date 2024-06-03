import React from 'react';
import luffy from    '../Image/luffylg.png';
import oggy from     '../Image/oggylg.png';
import guy from      '../Image/guylg.png';
import chopper from  '../Image/chopperlg.png';
import hima from     '../Image/himalg.png';
import guy2 from     '../Image/guysm.png';
import doremon2 from '../Image/doremonlg.png';
import reel2 from    '../Image/reel2.png';
import reel3 from    '../Image/reel3.png';
import reel4 from    '../Image/reel4.png';
import reel5 from    '../Image/reel5.png';
import reel6 from    '../Image/reel6.png';
import Active from   './active';
export default function  Activedata(){
   return(  <div className='list-group' id="list1">

<Active 
 dp={luffy}
 dname="Monkey.D.Luffy"
 />
 <Active 
 dp={oggy}
 dname="Oggy oggy"
 />
 
 <Active 
 dp={guy}
 dname="Might Guy"
 />
 <Active 
 dp={chopper}
 dname="Tony Tony chopper"
 />
 <Active 
 dp={hima}
 dname="Himawari"
 />
  <Active 
 dp={reel2}
 dname="Red-Haired Shanks"
 />
  <Active 
 dp={reel3}
 dname="akatsuki"
 />
  <Active 
 dp={reel4}
 dname="Yami Sukehiro"
 />
  <Active 
 dp={reel5}
 dname="Kenpachi Zaraki"
 />
  <Active 
 dp={reel6}
 dname="Gowther"
 />  
   < div className="line-3" ></div>
   <h6 className='text-secondary m-2'>Group coversation</h6>

   <Active 
 dp={doremon2}
 dname="robots"
 /> 
  <Active 
 dp={guy2}
 dname="Lee groups"
 /> 











    </div>);

}