import React from 'react'
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="mt-xl-5 mt-lg-3 pl-xl,lg,md,sm-4 pl-4 pt-xl-1 pt-lg-1 pt-md-1 pt-sm-1 pt-1">
            <a href="#home"><h5 style={{color: `white`}} className="ml-xl-0 ml-lg-0 ml-md-0 ml-sm-0 ml-n2 mt-1">
                Made with <span aria-label="Heart Emoji">❤️ </span> 
                by MozGuj</h5>
            </a>
            <div className="ions mt-n4 ">
            <a href="https://twitter.com/mozguj?lang=en" target="_blank" className="faa mr-xl-4 mr-lg-4 mr-md-4 mr-sm-4 mr-3">
                <FaTwitter className="mt-n2" size={30}/>
            </a>
            <a href="https://www.instagram.com/mozguj/" target="_blank" className="faa mr-xl-4 mr-lg-4 mr-md-4 mr-sm-4 mr-3">
                <FaInstagram className="mt-n2" size={30}/>
            </a>
            </div>    
        </footer>
    )
}


export default Footer