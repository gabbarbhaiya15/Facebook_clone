import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import { useEffect } from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import image1 from './image3.png';
import { useNavigate } from "react-router-dom";







 export default function Login({inputs}){

    
const [fname, setfname] = useState("");
const [sname, setsname] = useState("");
const [password, setpassword] = useState("");
 const [phone, setphone] = useState('');
const [Lpassword, setLpassword] = useState('');
 const [Lphone,setLphone] = useState(''); 
 const [isLoggedIn, setisLoggedIn] = useState('');
 const [Named, setNamed] = useState([]);

const navigate = useNavigate() 

useEffect( () => {
     },[]
)





    return(
        <div className="facebook ">
            {/************************* Navbar ************************ */}
        <header>
            <nav class=" navbar navbar-dark bg-primary " id="nav">
              
                <h1 class="text-white d-flex " id="text"> facebook clone</h1>
                {/* ****************************** Login **************************** */}
            
                <div class="  text-white " id='logingroup'>
                    <div class="input-group input-group-sm d-flex flex-column">
                    <h7>Phone no.</h7>
                    <input type="text" name = "email" id="email" value={Lphone} onChange={(e) => setLphone(e.target.value)} />
                    </div>
                    
                    <div class="input-group input-group-sm d-flex flex-column">
                    <h7>Password</h7>
                    <input type="text" name = "email" id="password" value={Lpassword} onChange={(e) => setLpassword(e.target.value)} />
                    </div>
                    <button type="submit" class="btn btn-primary  border-2" id="submit1" >Login</button>
                </div>
            </nav>
            </header>
            <section class="">
                
                <div class="box">
                   
              
                    <img  class=" " src = {image1}  alt=""/>
                </div>
            </section>
             {/* ******************************* signup *******************/} 
            <div class="d-flex">
            <div class="box2">
             <h1> Create an account</h1> 
        
 <p>its quick and easy</p>
            
             <form>
                <div class=" form-group d-flex" id="golu">
                    <input type="text"  class=" form-control" placeholder="First name" value={fname} id='gloi' onChange={(e) => setfname(e.target.value)}   />
                    <input type="text" class=" form-control" placeholder="Last name" value={sname} onChange={(e) => setsname(e.target.value)} />

                </div>
                <div class="list-group" >
                <input type="number" placeholder='phone number ' class="form-control list-group-item"  value={phone} id="user" onChange={(e) => setphone(e.target.value)}  />
                <input type="password" placeholder=" New Password "  class="form-control list-group-item" value={password}  id="user2" onChange={(e) => setpassword(e.target.value)} />
                </div>
                <h6>Birthday</h6> 
                <input type="date"  class="mb-5" />
                <h6>Gender</h6>
                <div className='radio'>
                <input type="radio" name=""  class=""/>
                <label for="male"><h6>Male</h6></label>
                <input type="radio" name="" class=""/><label for="male"><h6>Female</h6></label>
                </div>
               <button type='submit'  class="btn btn-success d-flex flex-column" id="signup" >
<Link to ="/header" className='text-black'>Sign-Up</Link>
 </button>
             </form>

            </div>
            </div>


        </div>
        
    );
 }