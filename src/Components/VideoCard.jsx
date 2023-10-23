import React from 'react'
import '../Styles/Videos.css'
import playButton from '../icons/playButton.svg'

const VideoCard = ({image}) => {
  return (
    
       <div className="video_card" style={{backgroundImage:`url(${image})`}}>
        <a href="/">
       <img className='play_button' src={playButton} alt="" />
       </a>
       </div>  
  
  )
}

export default VideoCard