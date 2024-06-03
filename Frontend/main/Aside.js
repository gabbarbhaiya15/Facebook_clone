import React from "react";
import { useState } from "react";
import image9 from '../Image/yashraj1.png';
import image10 from'../Image/8ball.png';
import image11 from'../Image/chess.png';
import image12 from'../Image/blood.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import UpdateIcon from '@mui/icons-material/Update';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import TopicIcon from '@mui/icons-material/Topic';
import Groups2Icon from '@mui/icons-material/Groups2';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Aside.css';
export default  function  Aside({username1}) {
    
const [More,setMore]=React.useState("true")
    function click1() {
        console.log("click");
        setMore(prevstate =>!prevstate)
    }
    return(
        <div className="box">
     <div className="list-group" id="">
        
        
        <button className="list-group-item d-flex" id="list">
        <img src={image9} alt="" id="asidephoto"/>

             {username1}
             </button>
        <button className="list-group-item d-flex " id="list">
        <PeopleIcon color="primary" className="icon"/>

            Friends</button>
        <button className="list-group-item" id="list">
            <TopicIcon color="primary" className="icon"/>
            Feeds</button>
        <button className="list-group-item" id="list">
            <Groups2Icon color="primary" className="icon"/>
            Group</button>
        <button className="list-group-item" id="list">
            <StorefrontIcon color="primary" className="icon"/>
            Marketplace</button>
        <button className="list-group-item" id="list">
            <OndemandVideoIcon color="primary" className="icon"/>
            Watch</button>
        <button className="list-group-item" id="list">
            <BookmarkIcon color="primary" className="icon"/>
            Saved</button>
            <div>
         {/***<button className="list-group-item" id="list" onClick={click1}>
               <ExpandMoreIcon color="primary" className="icon" />
    See more</button> **/}
               {More ?  <button className="list-group-item" id="list" onClick={click1
            }>
               <ExpandMoreIcon color="primary" className="icon" />
                See more</button> : <div>
                <button className="list-group-item" id="list">
                 <img src={image12} alt="" id="ball1"/>
                 Blood Donation
                </button>
                <button className="list-group-item" id="list">
                    <BarChartIcon color="primary" className="icon "/>
                    Ads manager
                    </button>
                <button className="list-group-item" id="list">
                <CalendarTodayIcon color="primary" className="icon "/>
                Event
                </button>
<button className="list-group-item" id="list">
    <FlagIcon color="disabled" className="icon "/>
    Pages
</button>
<button className="list-group-item" id="list" >
    <UpdateIcon color="primary" className="icon "/>
    Memories
</button>



     {More?<button className="list-group-item" id="list" onClick={click1}>
 <KeyboardArrowDownIcon className="icon"/>
    show less
</button>: <button className="list-group-item" id="list" onClick={click1
            }>
               <ExpandMoreIcon color="primary" className="icon" />
                show less</button>}
                </div>
                }
                      
                      
               </div>



                < div className="line-1" ></div>
                <span className="ml-3 fw-medium " >Your Shortcut</span>
                <button className="list-group-item " id="list">
                 <img src={image10} alt="" id="ball"/>
                8 Ball Pool
              </button>
              <button className="list-group-item " id="list">
                 <img src={image11} alt="" id="ball"/>
                chess
              </button>



         </div>
</div>
    );
}
