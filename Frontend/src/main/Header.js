import  React from "react";
import { useState } from "react";
import image4 from  '../Image/fb.png';
import image5 from  '../Image/yashraj1.png';
import image6 from  '../Image/apps.png';
import image7 from  '../Image/mess.png';
import image8 from  '../Image/bell.png';
import image41 from '../Image/bbell.png';
import image42 from '../Image/bapps.png';
import image43 from '../Image/bmssg.png';
import image44 from '../Image/event2.png';
import image45 from '../Image/friend2.png';
import image46 from '../Image/group3.png';
import image47 from '../Image/post3.png';
import image48 from '../Image/post5.png';
import image49 from '../Image/story2.png';
import image50 from '../Image/page.png';
import image51 from '../Image/ads2.png';
import image14 from '../Image/reelblack.png';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Aside from "./Aside";
import Home from "./Home";
import Rside from "./Rside";
import Story from "./story";
import 'bootstrap/dist/css/bootstrap.min.css';


import './Header.css';

export default function Header({id,fname,sname,}) {
   
const [Homedata,setHomedata] = React.useState("false"
  )
  const [Mess,setMess] = React.useState("false"
  )
  const [Bell,setBell] = React.useState("false"
  )
  const [Pro,setPro] = React.useState("false"
  )
  function open() {
    setHomedata(prevstate=>!prevstate)
   }
   function Messed() {
    setMess(prevstate=>!prevstate)
   }
   function Bells() {
    setBell(prevstate=>!prevstate)
   }
   function Pros() {
    setPro(prevstate=>!prevstate)
   }
  return(
      <div>
        
<header className="bg-white d-flex  ">
<div class="logobox">
<img src={image4} alt=""
class="m-3"
id="fb-header"
/>


<input type="search" id="search" className=" form-control rounded-pill mt-3 ml-0 bg-gray-200" placeholder="Search"/>


</div>
<div class="boxm">
<button type="button" className="btn " id="boxm-icon"> <HomeRoundedIcon color="disabled" /></button>
<button type="button" className="btn " id="boxm-icon" ><OndemandVideoOutlinedIcon color="disabled"  /></button>
<button type="button" className="btn " id="boxm-icon"> <StorefrontIcon color="disabled"  /> </button>
<button type="button" className="btn " id="boxm-icon"> <GroupsIcon color="disabled" /> </button>
<button type="button" className="btn " id="boxm-icon"> <VideogameAssetIcon color="disabled" /> </button>
</div>


  {/* *************************** menu*************** */}
  <div id="boxr">
{Homedata?
<button class="" id="profile2" onClick={open}>
<img src= "https://img.icons8.com/ios-filled/50/000000/circled-menu.png" alt=""

id="icon6"
/> </button>
:<div>
  
<button class="profile2"  onClick={open}>
<img src= "https://img.icons8.com/ios-filled/50/228BE6/circled-menu.png" alt=""

id="icon6"
/> </button>

<div class="" id="menubox">
<h3 class="fw-bolder m-2 " id=""> Menu      </h3>
<div class="d-flex">
<div class=" mx-3" id="menubox2">
  <div class="d-flex">
<SearchIcon class="" id="sicon" color="disabled" />
<input type="search" id="search1" className=" form-control rounded-pill" placeholder="   Search menu"/>

</div>
<div className="list-group">
  <h6 className="mt-2 text-secondary">Social</h6>
<button className="list-group-item d-flex" id="listk">
        <img src={image44} alt="" id="iconp"/>

             Event
             </button>
             <button className="list-group-item d-flex" id="listk">
        <img src={image45} alt="" id="iconp"/>

             Friends
             </button>
             <button className="list-group-item d-flex" id="listk">
        <img src={image46} alt="" id="iconp"/>

             Group
             </button>
             <button className="list-group-item d-flex" id="listk">
        <img src={image47} alt="" id="iconp"/>

             Feeds
             </button>
  </div>

  </div>
  <div class="" id="menubox4">
      <h5 class="fw-bolder">Create</h5>
      <div class="list-group">
      <button className="list-group-item d-flex" id="listc">
        <img src={image48} alt="" id="iconm"/>

             Post
             </button>
             <button className="list-group-item d-flex" id="listc">
        <img src={image49} alt="" id="iconm"/>
    Story
             </button>
             <button className="list-group-item d-flex" id="listc">
        <img src={image50} alt="" id="iconm"/>

             Page
             </button>
             <button className="list-group-item d-flex" id="listc">
        <img src={image51} alt="" id="iconm"/>

             Adv
             </button>
             <button className="list-group-item d-flex" id="listc">
        <img src={image14} alt="" id="iconm"/>

             
             </button>
        </div>
    </div>
    </div>
  </div>
</div>
}

{/* ********************** messenger  ************************ */}
{Mess      ?
<button class="" id="profile3" onClick={Messed}>
<img src={image7} alt=""

id="icon6"
/> </button>
:<div>
<button class="" id="profile3" onClick={Messed}>
<img src={image43} alt=""

id="icon6"
/> </button>
</div>
}

{/* ******************** notification ************************** */}

{Bell    ?
<button class="" id="profile4" onClick={Bells}>
<img src={image8} alt=""

id="icon6"
/> </button>
:<div>
<button class="" id="profile4" onClick={Bells}>
<img src={image41} alt=""

id="icon6"
/> </button>
</div>
}

<img src={image5} alt=""

id="profile"
/>
</div>
</header>
<div class="d-flex">
     
     <div className="aside">
     <Aside
  username1={fname}
  />
</div> 
  <div className="home">
     <Home/>
  </div>
  
  <div className="rside">
     <Rside/>
  </div>
  
  
  
  </div>


</div>

    );
}


