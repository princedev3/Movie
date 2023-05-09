import React from 'react'
import {FaStar,FaStarHalf} from "react-icons/fa"
import { Link } from 'react-router-dom'

//{}[]
const Homecard = ({item:{id,cover,name,rating,time,desc,starring,genres,tags,video}}) => {
  return (
    <div className='box'>
        <div className='coverImage'>
                <img src={cover} alt={cover}/>
        </div>
        <div className='content flex'>
            <div className='details row'>

                    <h1>{name}</h1>
                    <div className='rating flex'>
                    <div className='rate'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStarHalf/>
                    </div>
                    <label>{rating}(Imdb)</label>
                    <span>GP</span>
            <label>{time}</label>
            </div>
        <p>{desc}</p>
        <div className='cast'>
                <h4><span>Starring</span>{starring}</h4>
                <h4><span>Genres</span>{genres}</h4>
                <h4><span>Tags</span>{tags}</h4>
        </div>
        <button className='primary-btn'>Play Now</button>
        </div>
        <div className='playButton row'>
            <Link className='link' to={`/singlepage/${id}`}>
                 <button>
                    <div className='img'>
                        <img src='./images/play-button.png' className='img1' alt=''/>
                        <img src='./images/play.png' alt='' className='change'/>
                    </div>
                    WATCH TRAILER
                 </button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Homecard