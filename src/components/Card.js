import React from 'react';
const Card = (Props) => {
    return (
        <>
        <span>
        <div className="card mb-3 card-m-w spacer">
        <div className="row g-0">
        <div className="col-md-4">
        <img className="card-img" src={Props.imgLink} alt="test" />
        </div>
        <div className="col-md-8">
        <div className="card-body">
        <h5 className="card-title">{Props.cardName}</h5>
        <p className="card-text">{Props.cardDec}</p>
        <p className="card-text"><small ><a className="text-muted" href={Props.targateLink}>{Props.targateMsg}</a></small></p>
        </div>
        </div>
        </div>
        </div>
        </span>
        </>
    )
}

export default Card
