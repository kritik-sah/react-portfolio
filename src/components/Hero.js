import React from 'react'
import Particles from 'react-particles-js';

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
            <h1>hi</h1>
        </div>
        </>
    )
}

export default hero
