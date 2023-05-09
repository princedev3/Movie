import "./Style.css"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { homeData } from '../../dummyData'
import Upcoming from '../upcoming/Upcoming'
import { recommended } from '../../dummyData'

//{}[]

const Singlepage = () => {

    const {id} = useParams()
    
    const[item,setItem]= useState(null)

    useEffect(()=>{
        let item = homeData.find(item=>item.id===parseInt(id))
        if(item){
            setItem(item)
        }
    },[id]
    )

    const[rec,setRec] = useState(recommended)
  return (
    
    <div>
   {item? (
        <section className='singlePage'>
          <div className='singleHeading'>
            <h1>{item.name}</h1>
            <span> | {item.time} | <span></span>HD</span>
          </div>
          <div className='container'>
            <video src={item.video} controls></video>
            <div className='para'>
                <h3>Date: {item.date}</h3>
                <p>{item.desc}</p>
                <p>Moving along… Okay, I like a challenge. But I know you in the future. I cleaned your poop. Daylight and everything. Oh no! The professor will hit me! But if Zoidberg 'fixes' it… then perhaps gifts!

I never loved you. Ah, yes! John Quincy Adding Machine. He struck a chord with the voters when he pledged not to go on a killing spree. A true inspiration for the children. Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars.

I feel like I was mauled by Jesus. Say it in Russian! Oh dear! She's stuck in an infinite loop, and he's an idiot! Well, that's love for you. Hey, whatcha watching? OK, this has gotta stop. I'm going to remind Fry of his humanity the way only a woman can.

Maybe I love you so much I love you no matter who you are pretending to be. Kif might! Dr. Zoidberg, that doesn't make sense. But, okay! One hundred dollars. Who are you, my warranty?!</p>
                <p>Moving along… Okay, I like a challenge. But I know you in the future. I cleaned your poop. Daylight and everything. Oh no! The professor will hit me! But if Zoidberg 'fixes' it… then perhaps gifts!

I never loved you. Ah, yes! John Quincy Adding Machine. He struck a chord with the voters when he pledged not to go on a killing spree. A true inspiration for the children. Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars.

I feel like I was mauled by Jesus. Say it in Russian! Oh dear! She's stuck in an infinite loop, and he's an idiot! Well, that's love for you. Hey, whatcha watching? OK, this has gotta stop. I'm going to remind Fry of his humanity the way only a woman can.

Maybe I love you so much I love you no matter who you are pretending to be. Kif might! Dr. Zoidberg, that doesn't make sense. But, okay! One hundred dollars. Who are you, my warranty?!</p>
                <p>Moving along… Okay, I like a challenge. But I know you in the future. I cleaned your poop. Daylight and everything. Oh no! The professor will hit me! But if Zoidberg 'fixes' it… then perhaps gifts!

I never loved you. Ah, yes! John Quincy Adding Machine. He struck a chord with the voters when he pledged not to go on a killing spree. A true inspiration for the children. Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars.

I feel like I was mauled by Jesus. Say it in Russian! Oh dear! She's stuck in an infinite loop, and he's an idiot! Well, that's love for you. Hey, whatcha watching? OK, this has gotta stop. I'm going to remind Fry of his humanity the way only a woman can.

Maybe I love you so much I love you no matter who you are pretending to be. Kif might! Dr. Zoidberg, that doesn't make sense. But, okay! One hundred dollars. Who are you, my warranty?!</p>
                
            </div>
            <div className='social'>
                <h3>Share : </h3>
                <img src='https://img.icons8.com/color/48/000000/facebook-new.png'/>
                <img src='https://img.icons8.com/color/48/000000/twitter-circled.png'/>
                <img src='https://img.icons8.com/color/48/000000/linkedin-circled.png'/>
            </div>
          </div>
        </section>
        
    ) :null}
    <Upcoming items={rec} title="Recommeded Movies"/>
</div>
  )
}

export default Singlepage