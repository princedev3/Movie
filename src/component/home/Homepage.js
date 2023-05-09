import { useState } from 'react'
import Upcoming from '../upcoming/Upcoming'
import Homes from './Homes'
import { upcome,latest, recommended } from '../../dummyData'
import Trending from '../trending/Trending'


const Homepage = () => {

  const[items,setItems] = useState(upcome)
  const[rec,setRec] = useState(recommended)

  const[item,setItem] = useState(latest)
  
  return (
    <div>
      <Homes/>
      <Upcoming items={items} title="Upcoming Movies"/>
      <Upcoming items={item} title="Lastest"/>
      <Trending/>
      <Upcoming items={rec} title="Recommeded Movies"/>
    </div>
  )
}

export default Homepage