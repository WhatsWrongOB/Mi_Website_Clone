import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Slider.css'


const Slider = ({ end }) => {
    return (
        <Carousel fade >
            {
                end.map((item, index) => (
                    <Carousel.Item>

                        <img className='slider_end' key={index} src={item.image} alt="poster" />

                        <Carousel.Caption>
                         <h2 className="slider_end_heading">{item.name}</h2>
                         <p className="description">{item.description}</p>
                         <p className="source">{item.source}</p>
                        </Carousel.Caption>

                    </Carousel.Item>

                ))
            }
        </Carousel>
    )
}

export default Slider