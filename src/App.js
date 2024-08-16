import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Herosection from "./Components/Herosection/Hero";
import Aboutsection from "./Components/Aboutsection/About";
import Service from './Components/Services/Service';
import Gallery from './Components/Gallerysection/Gallery';
import Contact from './Components/Contactsection/Contact';
import Footer from './Components/Footersection/Footer';
 const App = () => {
  return (
    <div>
    <Navbar/>
    <Herosection/>
    <Aboutsection/>
    <Service/>
    <Gallery/>
    <Contact/>
    <Footer/>
    
    </div>
  )
}

export default App;