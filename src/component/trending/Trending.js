import React, { useState } from 'react'
import "../trending/Trending.css"
import Home from '../home/Home'
import { trending } from '../../dummyData'
//{}[]
const Trending = () => {
    const [items,setItems]= useState(trending)
  return (
    <div>
        <section className='trending'>
            <Home items={items}/>
        </section>
    </div>
  )
}

export default Trending