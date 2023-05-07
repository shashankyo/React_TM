import React from 'react'
import {Link} from 'react-router-dom'

export const About = (props) => {
    return (
        <div>
            <h1 className='container3'>Haha</h1>
            <div className="card" style={{width: "18rem"}}>
                
                <img className="card-img-top" src={props.img} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.header}</h5>
                    <p className="card-text">{props.subheader}</p>
                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>

        </div>
    )
}
