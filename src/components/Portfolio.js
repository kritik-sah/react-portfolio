import React from 'react';
import Card from './Card';
import Carddata from '../data/Carddata';

const Portfolio = () => {
    return(Carddata.map(function (Props){
        return(
        <>
        <Card 
            cardName = {Props.cardName}
            cardDec = {Props.cardDec}
            imgLink = {Props.imgLink}
            targateMsg = {Props.targateMsg}
            targateLink = {Props.targateLink}
            />
        </>
            );
    }));
    

};


export default Portfolio
