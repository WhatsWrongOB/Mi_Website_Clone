import React from 'react'
import '../Styles/Heading.css'

const Heading = ({text}) => {
  return (
    <div className="heading_component">
    <div className='line'></div>
    <h1 className="heading">{text}</h1>
    <div className="line1"></div>
    </div>
  )
}

export default Heading