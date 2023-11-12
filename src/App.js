import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Datepicker, Input, initTE } from "tw-elements";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Feature from './Components/Feature/Feature';
import Productive from './Components/Productive/Productive';
import Slider from './Components/Slider/Slider';
import Contact from './Components/Contact/Contact';
import Scrollspy from 'react-scrollspy';

function App() {
 
 return <>

 <Navbar/>
 <Hero/>
 <Feature/>
 <Productive/>
 <Slider/>
 <Contact/>

 
 </>
}

export default App;
