import React, { useEffect, useState } from 'react'
import '../Styles/NavOptions.css'
import NavCard from './NavCard'

const NavOptions = ({ miPhone, redmiPhone, tv, laptop, fitness, home, audio, accessories }) => {

    const [miPhoneToggle, setMiPhoneToggle] = useState(false);
    const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
    const [tvToggle, setTvToggle] = useState(false);
    const [laptopToggle, setLaptopToggle] = useState(false);
    const [fitnessToggle, setFitnessToggle] = useState(false);
    const [homeToggle, setHomeToggle] = useState(false);
    const [audioToggle, setAudioToggle] = useState(false);
    const [accessoriesToggle, setAccessoriesToggle] = useState(false);


    useEffect(() => {

        if (window.location.pathname === "/miPhone") {
            return setMiPhoneToggle(true);
        }

        if (window.location.pathname === '/redmiPhone') {
            return setRedmiPhoneToggle(true);
        }

        if (window.location.pathname === '/tv') {
            return setTvToggle(true);
        }

        if (window.location.pathname === '/laptop') {
           return setLaptopToggle(true);
        }

        if (window.location.pathname === '/fitness') {
            return  setFitnessToggle(true);
        }

        if (window.location.pathname === '/homes') {
            return setHomeToggle(true);
        }

        if (window.location.pathname === '/audio') {
            return setAudioToggle(true);
        }

        if (window.location.pathname === '/accessories') {
            return setAccessoriesToggle(true);
        }

    },[])


    return (
        <div className="navOption">

            
            {
                miPhoneToggle ? miPhone.map((item, index) => (
                    <NavCard key={index} image={item.image} name={item.name} price={item.price} />
                )) : null
            }

            {
                redmiPhoneToggle ? redmiPhone.map((item, index) => (
                    <NavCard key={index} image={item.image} name={item.name} price={item.price} />
                )) :null
            }

            {
                tvToggle ? tv.map((item, index) => (
                    <NavCard key={index} image={item.image} name={item.name} price={item.price} />
                )) :null
            }

            {
                laptopToggle ? laptop.map((item, index) => (
                    <NavCard key={index} image={item.image} name={item.name} price={item.price} />
                )) :null
            }

            {
                fitnessToggle ? fitness.map((item, index) => (
                    <NavCard key={index} image={item.image} name={item.name} price={item.price} />
                )) :null
            }

            {
                homeToggle ? home.map((item, index) => (
                    <NavCard key={index} image={item.image} name={item.name} price={item.price} />
                )) :null
            }

            {
                audioToggle ? audio.map((item, index) => (
                    <NavCard key={index} image={item.image} name={item.name} price={item.price} />
                )) :null
            }

            {
                accessoriesToggle ? accessories.map((item, index) => (
                    <NavCard key={index} image={item.image} name={item.name} price={item.price} />
                )) :null
            }

        </div>


    )
}

export default NavOptions