import React from 'react'
import '../Styles.css/About.css'
import computer_image from '../images/computer_image.png'

function About (){
    return(

        <div className='about_container' id="About">
            <div className='computer_image_container'>
            <img src={computer_image} className='computer_image'></img>
            </div>
            <p className='description'>
            <h3>About me 📚</h3>
            <h4>
            Hello! I'm Ivan, a passionate and dedicated front-end developer residing in the vibrant city of Bogota. 
            </h4>
            <br></br>
            At the age of 23, I have already immersed myself in the world of web development, constantly seeking new challenges and opportunities to expand my skill set.
           
            <br></br>
            As a front-end developer, I have honed my expertise in HTML, CSS, and JavaScript, utilizing frameworks like React to build dynamic and responsive web applications. I am constantly staying up-to-date with the latest industry trends and best practices, ensuring that my projects are not only aesthetically pleasing but also optimized for performance and accessibility.
            Thank you for taking the time to get to know me. I look forward to the opportunity of working together and creating something remarkable.
            </p>
            

        </div>
    )
}
export default About