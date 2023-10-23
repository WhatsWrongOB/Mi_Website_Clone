import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Slider.css'


const Slider = ({ start }) => {
  return (
    <Carousel fade>
      {
        start.map((item,index) => (
          <Carousel.Item>

            <img className='slider' key={index} src={item} alt="poster" />

          </Carousel.Item>
        ))
      }
    </Carousel>
  )
}

export default Slider