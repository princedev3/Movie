import React from 'react'
import Ucard from './Ucard'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {FcNext,FcPrevious} from "react-icons/fc"

//{}[]


const SampleNextArrow = (props)=>{
    const {onClick}=props

    return(
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
                    <FcNext/>
            </button>
        </div>
    )
}
const SamplePrevArrow = (props)=>{
    const {onClick}=props

    return(
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                    <FcPrevious/>
            </button>
        </div>
    )
}
const Upcoming = ({items,title}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive:[{
            breakpoint:800,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
        
      };
  return (
    <section className='upcome'>
            <div className='container'>
                <div className='heading flexSB'>
                    <h1>{title}</h1>
                    <Link className='link' to="/">View ALL</Link>
                </div>
                <div className='content'>
                <Slider {...settings}>
                    {items.map((item)=>(
                        <Ucard key={item.id} item={item}/>
                    )) }
                </Slider>
                </div>
            </div>
    </section>
  )
}

export default Upcoming