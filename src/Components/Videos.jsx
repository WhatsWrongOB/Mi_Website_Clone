import React from 'react'
import VideoCard from './VideoCard'
import '../Styles/Videos.css'

const Videos = ({video}) => {
  return (
    <div className="Videos">
          {
            video.map((item,index) => (
                <VideoCard key = {index} image ={item.image} name={item.name}/>
            ))
          }

    </div>
  )
}

export default Videos