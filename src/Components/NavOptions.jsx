import React from 'react'
import '../Styles/NavOptions.css'
import NavCard from './NavCard'

const NavOptions = ({ miPhone, redmiPhone, tv, laptop, fitness, home, audio, accessories }) => {
    return (
        
        <div className="navOption">

            {
                miPhone && miPhone.map((item, index) => (
                    <NavCard key={index} image={item.image} name={item.name} price={item.price} />
                ))
            }


            {
                redmiPhone && redmiPhone.map((item, index) => (
                    <NavCard key={index} image={item.image} name={item.name} price={item.price} />
                ))
            }

            {
                tv && tv.map((item, index) => (
                    <NavCard key={index} image={item.image} name={item.name} price={item.price} />
                ))
            }

            {
                laptop && laptop.map((item, index) => (
                    <NavCard key={index} image={item.image} name={item.name} price={item.price} />
                ))
            }

            {
                fitness && fitness.map((item, index) => (
                    <NavCard key={index} image={item.image} name={item.name} price={item.price} />
                ))
            }

            {
                home && home.map((item, index) => (
                    <NavCard key={index} image={item.image} name={item.name} price={item.price} />
                ))
            }

            {
                audio && audio.map((item, index) => (
                    <NavCard key={index} image={item.image} name={item.name} price={item.price} />
                ))
            }

            {
                accessories && accessories.map((item, index) => (
                    <NavCard key={index} image={item.image} name={item.name} price={item.price} />
                ))
            }

        </div>


    )
}

export default NavOptions