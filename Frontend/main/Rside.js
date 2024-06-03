import React from 'react';
import image25 from '../Image/ad2.png';
import image26 from '../Image/ad3.png';
import Activedata from './Activedata';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Rside.css';
 export default  function  Rside(){
    return(
        <div>
          <div className="dibba">
           <p class="mt-2 fw-medium text-muted">Sponsored</p>
          <button className="list-group-item d-flex " id="advb">
                 <img src={image25} alt="" id="adv"/>
               <p class=" word"> Pepsi.com </p>
              </button>
              <button className="list-group-item d-flex " id="advb">
                 <img src={image26} alt="" id="adv"/>
               <p class=" word"> coca-cola.com </p>
              </button>
              < div className="line-3" ></div>
            <Activedata/>
          </div>
        </div>
    );
 }
