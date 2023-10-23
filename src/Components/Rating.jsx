import React from 'react'
import '../Styles/Rating.css'
import star from '../icons/star.png'

const Rating = () => {
  return (
    <div className="rating">
        <img src={star} alt="star" />
        <span className="rating_para">1980 reviews</span>
        <div className="rating_divider"></div>
        <img src="https://judgeme-public-images.imgix.net/judgeme/medals-v2/ver_rev/diamond.svg?auto=format" alt="rating_img" />
        <img src="https://judgeme-public-images.imgix.net/judgeme/medals-v2/mon_rec/diamond.svg?auto=format" alt="rating_img" />
        <img src="https://judgeme-public-images.imgix.net/judgeme/medals-v2/tops_trend/1-percent.svg?auto=format" alt="rating_img" />
        <img src="https://judgeme-public-images.imgix.net/judgeme/medals-v2/tops/5-percent.svg?auto=format" alt="rating_img" />
    </div>
  )
}

export default Rating