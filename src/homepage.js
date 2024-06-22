import React from 'react';
import './homepage.css';

    function Navbar(){
        return(
    <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    
        )
      }


// As we are supposed to show all the components of homepage.js as a whole page on the website
// Insted of exporting and importing all the components indivisually we will wrap it in a parentcomponent and export the parentcomponent
// As wholePage.
      function TotalhomePage(){
        return(
            <div>
            <Navbar/>
            </div>
        )
      }
    
export default TotalhomePage;
