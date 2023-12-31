import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import data from './Data/data.json'
import Heading from './Components/Heading';
import PreNavbar from './Components/PreNavbar'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import Offer from './Components/Offer'
import StarProducts from './Components/StarProducts';
import HotAccessoriesMenu from './Components/HotAccessoriesMenu'
import HotAccessories from './Components/HotAccessories'
import Videos from './Components/Videos';
import NavOptions from './Components/NavOptions';
import SliderEnd from './Components/SliderEnd';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Rating from './Components/Rating';

function App() {
  return (
    <Router>

      <PreNavbar />
      <Navbar />
      
      <Routes>
        <Route exact path = "/miPhone" element = {<NavOptions miPhone={data.miPhones} />}/>
        <Route exact path = "/redmiPhone" element = {<NavOptions redmiPhone={data.redmiPhones} />}/>
        <Route exact path = "/tv" element = {<NavOptions tv={data.miPhones} />}/>
        <Route exact path = "/laptop" element = {<NavOptions laptop={data.laptop} />}/>
        <Route exact path = "/fitness" element = {<NavOptions fitness={data.fitnessAndLifeStyle} />}/>
        <Route exact path = "/homes" element = {<NavOptions home={data.home} />}/>
        <Route exact path = "/audio" element = {<NavOptions audio={data.audio} />}/>
        <Route exact path = "/accessories" element = {<NavOptions accessories={data.accessories} />}/>
       </Routes>
       
      <Slider start={data.banner.start} />
      <Offer offer={data.offer} />
      <Heading text="Star Products" />
      <StarProducts starProduct={data.starProduct} />
      <Heading text="Hot Accessories" />
      <HotAccessoriesMenu />

      <Routes>
        
        <Route exact path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
        <Route exact path='/smartDevice' element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
        <Route exact path='/home' element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
        <Route exact path='/lifeStyle' element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
        <Route exact path='/mobileAccessories' element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />

      </Routes>

      <Heading text="Videos" />
      <Videos video={data.videos} />
      <Heading text="In The Press" />
      <SliderEnd end={data.banner.end} />
      <Rating/>
      <Content/>
      <Footer footer ={data.footer}/>

    </Router>
  );
}

export default App;
