import React from 'react'
import '../Styles.css/Home.css'
import Profile_photo from "../images/home-profile.png"
import html_logo from "../images/html-logo.svg"
import css_logo from "../images/css-logo.svg"
import javascrip_logo from "../images/javascript-logo.svg"
import bootstrap_logo from '../images/bootstrap-logo.svg'
import react_logo from "../images/react-logo.svg"
import nodejs_logo from "../images/nodejs-logo.svg"

function Home (){
    return (
        <div id="Home">
            <div className='home-container' >

                <div className='home-text'>
                    <h1>Front-End React Developer 💻</h1>
                    <p>I'm Ivan Santiago. I am a passionate Software enginer  focused in Front-end development based in Bogotá, Colombia</p>
                        
                </div>

                <div className='profile-photo-container'>
                    <img src={Profile_photo} alt='profile-photo' className='profile-photo'></img>
                </div>
            </div>
        
            <div className='stacks'>
                    <h2>Tech Stack</h2>
                    <ul className='stacksdiv'>
                        <li> <img src={html_logo} alt='HTML-LOGO'></img></li>
                        <li><img src={css_logo} alt='CSS-LOGO'></img></li>
                        <li><img src={javascrip_logo} alt='JAVASCRIPT-LOGO'></img></li>
                        <li><img src={bootstrap_logo} alt='BOOTSTRAP-LOGO'></img></li>
                        <li><img src={react_logo} alt='REACT-LOGO'></img></li>
                        <li><img src={nodejs_logo} alt='NODEJS-LOGO'></img></li>
                    </ul>
                </div>
        
        
        </div>
    )
}


export default Home