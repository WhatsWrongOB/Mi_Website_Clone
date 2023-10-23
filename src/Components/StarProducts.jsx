import React from 'react'
import '../Styles/StarProducts.css'

const StarProducts = ({ starProduct }) => {
    return (
        <div className="starProduct">
            <div className="star_product_left">
                <a href={starProduct[0].url}>
                    <img src={starProduct[0].image} alt="star_product_img" />
                </a>
            </div >
            <div className="star_product_right">
                <a href={starProduct[1].url}><img className='starProduct_image1' src={starProduct[1].image} alt="star_product img" /></a>
                <a href={starProduct[2].url}><img className='starProduct_image2' src={starProduct[2].image} alt="star_product img" /></a>
                <a href={starProduct[3].url}><img className='starProduct_image3' src={starProduct[3].image} alt="star_product img" /></a>
            </div>
        </div>
    )
}

export default StarProducts