import React from 'react'
import '../Styles.css/Navbar.css'
import logo from '../images/logo.svg'
import { SidebarData } from '../components/NavbarData'

function Navbar () {
     
    function openNav () {
        document.getElementById('SidebarTest').style.display ="flex";
        document.getElementById('OpenButton').style.display ="none";
    }
    function closeNav () {
        document.getElementById('SidebarTest').style.display ="none";
        document.getElementById('OpenButton').style.display ="";
    }
    

    return(
    <div className='navbartest'>
        <nav>
            <img className='logo' src={logo} alt='logo'/>
                             
                <div className='Navbar' id="Navbar-Normal" >
                    
                    <ul>
                        {SidebarData.map((val, key) =>{
                            return (
                                <li key={key}  onClick={()=> {window.location.pathname = val.link}}>
                                    
                                    <div>{val.title}</div>
                                </li>
                            )
                        })}
                    </ul>
                    
                </div>  
                
                <nav class="navbar navbar-expand-lg bg-body-tertiary" id='BootstrapNavbar'>
            <div class="container-fluid">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">About</a>
                    <a class="nav-link" href="#">Projects</a>
                    <a class="nav-link disabled">Contact</a>
                </div>
                </div>
            </div>
                </nav>              




        </nav>

        
                    
   </div>)
}

export default Navbar