import React from 'react';
import Nav from '../src/components/Nav';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Footer from '../src/components/Footer';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import './App.css';



const App = () => {
    return (
        <>
        <Nav />
        <Hero />
        <About />
        <Footer />
        <ScrollUpButton 
            StopPosition={0}
            ShowAtPosition={0}
            AnimationDuration={50}
        />
        
        </>
    )
}

export default App
