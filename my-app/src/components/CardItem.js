import React from 'react'
import {Link} from "react-router-dom";

export const CardItem = (props) => {
    return (
        <div>
            <div className="card" style={{width: "200px"}}>
                <div className="card-body" >
                    <h5 className="card-title">{props.cardtitle}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.cardsub}</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/" className="card-link" >Card link</Link>
                    <Link to="/" className="card-link">Another link</Link>
                </div>
            </div>
        </div>
    )
}
