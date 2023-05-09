import React from 'react'
import Homecard from './Homecard'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {FcNext,FcPrevious} from "react-icons/fc"


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

const Home = ({items}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
      };
    
  return (
    <div className='homeContainer'>
        <Slider {...settings}>
        {
            items.map(item=>(
                <Homecard key={item.id} item={item}/>
            ))
        }
         </Slider>
    </div>
  )
}

export default Home