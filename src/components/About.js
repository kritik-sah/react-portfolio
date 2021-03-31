import React from 'react'
import Portfolio from './Portfolio';
import Typed from 'react-typed';

const About = () => {
    return (
        <div className="container spacer">
        <div className="about" id="about">
         <div className="sec-left ">
            <h4 className="txt-u-line">About Me:</h4>
            <h1>I am a A
            <Typed 
                strings={[
                    '+ FullStack Web Developer',
                    '+ Graphic Designer',
                    '+ Video Editor',
                    '+ YouTuber',
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
            />
            </h1>
            <p>There are so many ways i can describe my self but for now i think only One word is enough <strong>"<em className="txt-u-line">Learner</em>".</strong></p>
         </div>
         <div className="sec-right">

         </div>
         </div>
        <Portfolio />
    </div>
    )
}

export default About
