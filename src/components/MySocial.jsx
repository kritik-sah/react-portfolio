import React from 'react'
import Social from './Social'
import SocialData from '../data/Socials'
const MySocial = () => {
        return(
            <>
            <div className=" m-2">
            
            {SocialData.map(function (Props){
            return(
            <Social 
                imgLink = {Props.imgLink}
                imgAlt = {Props.imgAlt}
                tooltipMsg = {Props.tooltipMsg}
                targateLink = {Props.targateLink}
            />
                )})}
                </div>
        
        </>)
    
}

export default MySocial