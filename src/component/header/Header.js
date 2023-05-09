import React from 'react'
import "../header/Header.css"
import twich from "../image/twitchb.png"
import { Link } from 'react-router-dom'
import {FaBars,FaBell,FaSearch,FaTimes} from "react-icons/fa"
import  {BsFillPersonFill} from "react-icons/bs"
import { useState } from 'react'


//{}[]

const Header = () => {
    const [mobile, setMobile]= useState(false)
  return (
    <div className='header'>
        <div className='header-logo'>
                <img src={twich} alt={twich}/>
        </div>
        <ul onClick={()=>setMobile(false)} className={mobile? "nav-menu active":"nav-menu"}>
            <li><Link  className='link' to="/">Home</Link></li>
            <li><Link className='link' to="/series">series</Link></li>
            <li><Link className='link' to="/movies">movies</Link></li>
            <li><Link className='link' to="/pages">pages</Link></li>
            <li><Link className='link' to="/pricing">pricing</Link></li>
            <li><Link className='link' to="/contact">contact</Link></li>
        </ul>
        <div onClick={()=>setMobile(!mobile)} className='toggle-bar'>
                {mobile?<FaBars/> :<FaTimes/>}
        </div>
        <div className='icons-list'>
            <FaBell/>
            <FaSearch/>
            <BsFillPersonFill/>
            <h4>subscribe now</h4>
        </div>
    </div>
  )
}

export default Header