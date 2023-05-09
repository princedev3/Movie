import React from 'react'
import  "../footer/Footer.css"
import {FaInstagram,FaFacebookF,FaTwitter,FaYoutube} from "react-icons/fa"


const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <div className='box'> 
                <ul className='flex'>
                    <li>Terms of Use</li>
                    <li>Privacy-Policy</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>Watch List</li>
                </ul>
                <p>© 2023 STREAMIT,All Rights Reserved,All videos and shoes on this plafform are trademarks of ,and all related images and content are property of , Streamit INC.</p>
            </div>
            <div className='box'>
                <h3>Follow Us</h3>
                <FaFacebookF/>
                <FaInstagram/>
                <FaTwitter/>
                <FaYoutube/>
            </div>
            <div className='box'>
                <h3>Streamit App</h3>
                <div className='img flexSB'>
                    <img src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png" alt=""/>
                    <span>App Store</span>
                    <img src="https://img.icons8.com/fluency/48/000000/google-play.png" alt=""/>
                    <span>Google Playstore</span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer