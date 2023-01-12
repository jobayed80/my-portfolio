import React from 'react'
import './Intro.css'
import { CiLinkedin } from 'react-icons/ci'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'

import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv'

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I Am</span>
                    <span>Jobayed Hossain Rabbi</span>
                    <span>
                        Frontend Developer with high level of experience in web designing
                        and development, producting the Quality work
                    </span>
                </div>
                <button className='button i-button'>Hire me</button>
                <div className="i-icons">
                    <a href="https://www.linkedin.com/in/md-jobayed-hossain-rabbi-aa4072200" target="_blank">
                        <span>  <CiLinkedin className='social-icon'></CiLinkedin> </span>
                    </a>
                    <a href="https://github.com/jobayed80?tab=repositories" target="_blank">

                        <span>  <AiFillGithub className='social-icon'></AiFillGithub>  </span>
                    </a>
                    <a href="https://www.facebook.com/Jobayed.102/" target="_blank">
                        <span>  <AiOutlineFacebook className='social-icon'></AiOutlineFacebook>  </span>
                    </a>
                    <a href="" target="_blank">
                        <span>  <AiOutlineInstagram className='social-icon'></AiOutlineInstagram>  </span>
                    </a>

                </div>

            </div>

            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />

                <div style={{top:"-4%" , left:"68%"}}>
                    <FloatingDiv image={crown} txt1="Web" txt2="Developer"/>
                </div>
                <div style={{top:"17rem" , left:"-3rem"}}>
                    <FloatingDiv image={thumbup} txt1="MERN Stack" txt2="Web Developer(Learning)"/>
                </div>
                <div style={{top:"3rem" , left:"0%"}}>
                    <FloatingDiv image={thumbup} txt1="Programmer" txt2=""/>
                </div>
                <div style={{bottom:"11rem" , right:"5rem"}}>
                    <FloatingDiv image={thumbup} txt1="Data" txt2="Science"/>
                </div>
                <div style={{bottom:"2rem" , right:"-3rem"}}>
                    <FloatingDiv image={thumbup} txt1="Project" txt2="Showcasing"/>
                </div>

                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                
                <div
                className="blur"
                style={{
                    background: "#C1F5FF",
                    top: "17rem",
                    width: "21rem",
                    height: "11rem",
                    left: "-9rem",
                }}
                ></div>


            </div>
        </div>
    )
}

export default Intro