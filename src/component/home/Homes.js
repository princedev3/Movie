import React from 'react'
import { homeData } from '../../dummyData'
import Home from './Home'
import { useState } from 'react'
import "../home/Homes.css"


const Homes = () => {
    const [items,setItems]= useState(homeData)
  return (
    <div>
    <div className='home'>
        <Home items={items}/>
    </div>
        <div className='margin'></div>
    </div>
        
  )
}

export default Homes