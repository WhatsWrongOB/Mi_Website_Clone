import React from 'react'
import HotItemCard from './HotItemCard'
import '../Styles/HotAccessories.css'

const HotAccessories = ({ music, musicCover, smartDevice, smartDeviceCover, home, homeCover, lifeStyle, lifeStyleCover,mobileAccessories,mobileAccessoriesCover }) => {
    return (
        <div className="hotAccessories">
            <div className="left">
                <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="cover" />
            </div>

            <div className="right">
                {
                    music && music.map((item, index) => (
                        <HotItemCard key={index} image={item.image} name={item.name} price={item.price} />
                    ))}

                {
                    smartDevice && smartDevice.map((item, index) => (
                        <HotItemCard key={index} image={item.image} name={item.name} price={item.price} />
                    ))
                }

                {
                    home && home.map((item, index) => (
                        <HotItemCard key={index} image={item.image} name={item.name} price={item.price} />
                    ))
                }

                {
                    lifeStyle && lifeStyle.map((item, index) => (
                        <HotItemCard key={index} image={item.image} name={item.name} price={item.price} />
                    ))
                }

                  {
                     mobileAccessories && mobileAccessories.map((item, index) => (
                        <HotItemCard key={index} image={item.image} name={item.name} price={item.price} />
                    ))
                }

                      <HotItemCard image = "https://cdn.shopify.com/s/files/1/0231/3627/2464/files/Browse_More-230x230_230x230.png?42374"/>


            </div>

        </div>
    )
}

export default HotAccessories