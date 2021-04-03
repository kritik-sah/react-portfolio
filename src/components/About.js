import React from 'react'
import Cards from './Cards';
import Typed from 'react-typed';
import Luffy from "../img/luffy.png"
import { Youtube , Github , Whatsapp} from 'react-bootstrap-icons';
import PortfolioData from '../data/PortfolioData';

const About = () => {
    return (
        <div className="container spacer">
        <div className="about" id="about">
         <div className="sec-left ">
            <h4 className="txt-u-line">About Me:</h4>
            <h1>I am an A
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
            <p className="width-80">There are so many ways i can describe my self but for now i think only One word is enough <strong>"<em className="txt-u-line">Learner</em>".</strong></p>
            <a href="https://www.youtube.com/channel/UCh7-f_QrD7WcQcu62CixiHQ" target="_blank" rel="nofollow" className="btn m-10 btn-outline-danger"><Youtube /> YouTube</a>
            <a href="https://github.com/kritik-sah" target="_blank" rel="nofollow" className="btn m-10 btn-outline-warning"><Github /> GitHub</a>
            <a href="https://wa.link/xpwssg" target="_blank" rel="nofollow" className="btn m-10 btn-outline-success"><Whatsapp /> WhatsApp</a>
         </div>
         </div>
         <div className="luffy">
         <img src={Luffy} alt="Luffy" height="200px" width="auto" />
         </div>

         <div id="portfolio">
            <Cards title={"PORTFOLIO"} data={PortfolioData}/>
         </div>

         <div id="CERTIFICATIONS">
            <Cards title={"CERTIFICATIONS"} data={PortfolioData}/>
         </div>
    </div>
    )
}

export default About
