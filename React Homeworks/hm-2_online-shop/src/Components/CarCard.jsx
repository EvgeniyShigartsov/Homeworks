import React from 'react'
import StarSvg from './StarSvg.jsx'
const CarCard = (props) => {
    return (
        <div className="card-wrapper" key={props.src}>
            <img className="car-img" src={props.src} alt={props.name} />
            <div className="car-info">
                <div className="title-group">
                    <h4 className="car-title">{props.name}</h4>
                    <StarSvg />
                </div>
                <p>Price: {props.price}</p>
                <p>Color: {props.color}</p>
                <p>Article: {props.article}</p>
                <button className="btn-cart">Add to cart</button>
            </div>
        </div>
    )
}
export default CarCard
