import React from 'react'
import Particles from 'react-particles-js';
import Typed from 'react-typed';
import Profile from '../img/profile.png';

const hero = () => {
    return (
        <>
        <Particles 
            params = {{
                number:{
                    value: 300,
                    density:{
                        enable : true,
                        value_area:1900
                    }
                },
            }}
        />
        <div className="container-fluid hero">
        <div className="container">
            <img className="profile" src={Profile} alt="profile" />
            <h1>I am <strong>KRITIK SAH</strong></h1>
            <p>
            <Typed 
                strings={[
                    'A Web Developer',
                    'A Graphic Designer',
                    'A YouTuber',
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
            />
            </p>
        </div>
        </div>
        </>
    )
}

export default hero
