import React, { useState } from 'react';

import image27 from '../Image/three.png';
import image28 from '../Image/save2.png';
import image29 from '../Image/bell3.png';
import image30 from '../Image/embed.png';
import image31 from '../Image/report.png';
import image32 from '../Image/like1.png';
import image33 from '../Image/like2.png';
import image34 from '../Image/comment.png';
import image35 from '../Image/share.png';
import image36 from '../Image/send.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Post.css';
export default function Post({pdp,pname,ptext,pimg}){
   
    const [Blue,setBlue]=React.useState("true");
    const [Liked,setLiked]=React.useState("true");
   
function clicked() {
 setBlue(prevstate=>!prevstate)


}
   function niked() {
    setLiked(prevstate=>!prevstate)
   }
   
   {/*  from   here post start */}
   return( 
   <div className="list-group-item" id='post'>
   
           

    <div  className='d-flex mx-lg-4 fw-bold'  id='toppart-post-box'>
    <div className='user_box'>
<img src={pdp} alt="" id="asidephotos"/>
<div className='name-text'>
{pname}
<h5 className = "text9" > {ptext}</h5> 
</div>
</div>


<div className='three_dot_box'>

{ Blue ? 
<div>

<div className="btn-group dropstart">
<button type='button' className='btn  ' id="three-dot-btn" onClick={clicked}>
    <img src={image27} alt="" id="three" />
</button>
</div>
</div>

:

<div>

<div className="btn-group dropstart" id="Dropstart">
<button type='button' className='btn  ' id="three-dot-btn" onClick={clicked}>
    <img src={image27} alt="" id="three"/>
</button>
{/* drop down box* */}
<div className="drop">
<button className="btn " id="drp">
                 <img src={image28} alt="" id="save"/>
                 Save Post
                </button>
                < div className="line-4" ></div>

                <button className="btn " id="drp">
                 <img src={image29} alt="" id="save"/>
                 Turn on the notification
                </button>
                <button className="btn " id="drp">
                 <img src={image30} alt="" id="save"/>
                 embed
                </button>
                < div className="line-4" ></div>
                <button className="btn " id="drp">
                 <img src={image31} alt="" id="save"/>
                 Report Post
                </button>




</div>




</div>

</div>
}
</div>


</div>








  <img  src= {pimg} alt='' id='pimg'/> 


<div className='post-bottom-box'>


<div onClick={niked} className='Like_button'>
        { Liked ?<div><img src={image33} alt="" id="niked"/></div>
      : <div ><img src={image32} alt="" id="niked"/> </div>
    }
<p className='text-secondary' id="text-like">Like</p>
</div >

<div className='comment_box' >
    
<div><img src={image34} alt="" id="comment" /></div>
<p className='text-secondary' id="text-comment">Comment</p>
</div>
<div className='share_button '>
<div><img src={image35} alt="" id="share" /></div>
<div><p className='text-secondary' id="text-share">share</p></div>
</div>

</div>






{/* add comment box **/}
<div className="cbox">
<img src={pdp} alt="" id="asidephoto"/>
<input  class="rounded-pill"type="text"  placeholder = "write a comment"  id="text2" />
<button type='submit' id="ctn"><img src={image36} alt="" id="send"/>
</button>
</div>





    </div>


    );
}
