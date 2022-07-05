import { logDOM } from "@testing-library/react";
import React from "react";
import logo from '../logo2.png' 

import './Navbar.css'
const Navbar=()=>{

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

    return(
<>

<div className="navbarParent">

    <div className="topnav" id="myTopnav">

                    <div className="logoDiv">
                        <img src={logo} height="55px" width="140px" />
                    </div>

                    <div className="linksDiv">
                        <a href="#" class="active">Home</a>
                        <a href="#">News</a>
                        <a href="">Contact</a>
                        <a href="/secondnav">About</a>
                        <a> <button className="btnClass1">Press</button></a>
                        
                        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                            <i class="fa fa-bars"></i>
                        </a>

                    </div>


                    <div className="btnDiv">
                        <button className="btnClass">Press</button>
                    </div>
     </div>

</div>

</>


    )
}

export default Navbar