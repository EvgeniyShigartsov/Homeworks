import React from 'react'
import StarSvg from './StarSvg.jsx'
import PropTypes from 'prop-types'
class CarInfo extends React.Component {
    render() {
        return (
            <div className="car-info">
                <div className="title-group card-field">
                    <h4 className="car-title">{this.props.name}</h4>
                    {this.props.showStar && <StarSvg labelFor={this.props.name} onClick={this.props.onStarClick} />}
                </div>
                <p className="card-field">Price: {this.props.price} </p>
                <p className="card-field">Color: {this.props.color}</p>
                <p className="card-field">Article: {this.props.article}</p>
                {this.props.showBtn && (
                    <button className="btn-cart card-field" onClick={this.props.onBtnClick}>
                        Add to cart
                    </button>
                )}
            </div>
        )
    }
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
