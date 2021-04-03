import React from 'react';
import Card from './Card';

const Cards = (myCard) => {
    return(
        <>
        <div>
        <h1 className="spacer heading-center"><b>{myCard.title}</b></h1>
        </div>
        {myCard.data.map(function (Props){
        return(
        <Card 
            cardName = {Props.cardName}
            cardDec = {Props.cardDec}
            imgLink = {Props.imgLink}
            imgAlt = {Props.imgAlt}
            targateMsg = {Props.targateMsg}
            targateLink = {Props.targateLink}
            />
            )})}
    
</>)
}


export default Cards
