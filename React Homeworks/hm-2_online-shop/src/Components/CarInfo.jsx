import React from 'react'
import PropTypes from 'prop-types'
import StarSvg from './StarSvg.jsx'
import Button from './Button.jsx'

export const CarInfo = (props) => {
    return (
        <div className="car-info">
            <div className="title-group card-field">
                <h4 className="car-title">{props.name}</h4>
                {props.showStar && <StarSvg labelFor={props.name} isFavorite={props.isFavorite} onClick={props.onStarClick} />}
            </div>
            <p className="card-field">Price: {props.price} </p>
            <p className="card-field">Color: {props.color}</p>
            <p className="card-field">Article: {props.article}</p>
            {props.showBtn && <Button classList="btn-cart card-field" onClick={props.onBtnClick} backgroundColor="#28a745" text="Add to cart" />}
        </div>
    )
}
export default CarInfo

CarInfo.defaultProps = {
    showStar: false,
    showBtn: false,
    onStarClick: () => false,
    onBtnClick: () => false,
}
CarInfo.propTypes = {
    showStar: PropTypes.bool,
    showBtn: PropTypes.bool,
    name: PropTypes.string,
    price: PropTypes.string,
    article: PropTypes.number,
    color: PropTypes.string,
    onStarClick: PropTypes.func,
    onBtnClick: PropTypes.func,
}
