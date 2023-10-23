import React from 'react'
import '../Styles/Offer.css'
import OfferCard from './OfferCard'

const Offer = ({ offer }) => {
  return (

    <div className="offer">
      {
        offer.map((item, index) => (
          <OfferCard key={index} image={item.image} link={item.url}/>

        ))
      }

    </div>

  )
}

export default Offer