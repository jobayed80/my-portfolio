import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';



const Services = () => {
    return (
        <div className='services'>
            <div className="awesome">
                {/* dark mode */}
                <span>My Awesome</span>
                <span>services</span>
                <spane>
                    Lorem ispum is simpley dummy text of printing of printing Lorem
                    <br />
                    ispum is simpley dummy text of printing
                </spane>
                <a href="">
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "rgb(238 210 255)" }}></div>
            </div>


            <div className="cards">
                <div style={{left:"14rem"}}>
                <Card 
                    emoji= {HeartEmoji}
                    heading={"Design"}
                    details={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}/>
                </div>
            </div>
        </div>
    )
}

export default Services