import React from 'react'

const Skill = (props) => {
    return (
        <>
        <span className="m-1 d-inline-block">
        <a href={props.targateLink} target="_blank" rel="noreferrer" className=' btn border border-white skillbadge' data-bs-toggle="tooltip" data-bs-placement="bottom" title={props.tooltipMsg}>
         <img src={props.imgLink} alt={props.imgAlt} height="30px" width="auto" className="d-flex flex-row" />
        </a>
        {/*<a href={props.targateLink} target="_blank" rel="no-follow" className='' data-bs-toggle="tooltip" data-bs-placement="bottom" title={props.tooltipMsg}>
         <img src={props.imgLink} alt={props.imgAlt} height="30px" width="auto" className="d-flex flex-row" />
        </a>*/}
        </span>
        </>
    )
}

export default Skill
