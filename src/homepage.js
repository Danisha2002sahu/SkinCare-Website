import React from 'react';
import './homepage.css';
import topsectionimage from './topsectionimage1.jpg';
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'

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
       
    function HomepageTopSection(){
        return(
            //write the html code here
           <div className="HomepageTopSection">
<img src={topsectionimage} alt="topimage"></img>
           </div>

        )
    }
    
    function ProductCarousel(){
        return(
            <div classname="ProductCarousel">
                <img src={img1} alt="kuchbhi"></img>
                <img src={img2} alt="fhf"></img>
                <img src={img3} alt="akhi"></img>
            </div>
        )
    }


      function TotalhomePage(){
        return(
            <div>
            <Navbar/>
            <HomepageTopSection/>
            <ProductCarousel/>
            </div>
        )
      }
    
export default TotalhomePage;
