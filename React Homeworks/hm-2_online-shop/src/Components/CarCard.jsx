import React from 'react'
import StarSvg from './StarSvg.jsx'
import Modal from './Modal.jsx'
import PropTypes from 'prop-types'

class CarCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isOpenModal: false }

        this.modalFields = {
            header: 'Add to cart',
            text: `Add to cart this product ?`,
            btnText: {
                add: 'Add to cart',
                back: 'Back',
            },
        }
    }
    checkItemInLocalStorage = (itemName) => {
        localStorage.getItem(itemName) ? localStorage.removeItem(itemName) : localStorage.setItem(itemName, itemName)
        this.setState({ isOpenModal: false })
    }
    modalWrapperHandler = (e) => {
        if (e.target.id !== 'modal-wrapper') return
        this.setState({ isOpenModal: false })
    }
    render() {
        return (
            <div className="card-wrapper">
                <img className="car-img" src={this.props.src} alt={this.props.name} />
                <div className="car-info">
                    <div className="title-group card-field">
                        <h4 className="car-title">{this.props.name}</h4>
                        <StarSvg labelFor={this.props.name} onClick={() => this.checkItemInLocalStorage(this.props.name)} />
                    </div>
                    <p className="card-field">Price: {this.props.price} </p>
                    <p className="card-field">Color: {this.props.color}</p>
                    <p className="card-field">Article: {this.props.article}</p>
                    <button className="btn-cart card-field" onClick={() => this.setState({ isOpenModal: !this.state.isOpenModal })}>
                        Add to cart
                    </button>
                    {this.state.isOpenModal && (
                        <Modal
                            text={this.modalFields.text}
                            header={this.modalFields.header}
                            btnText={this.modalFields.btnText}
                            isOpen={this.state.isOpenModal}
                            onWrapperClick={this.modalWrapperHandler}
                            onCancelBtnClick={() => this.setState({ isOpenModal: !this.state.isOpenModal })}
                            onConfrimBtnClick={() => this.checkItemInLocalStorage(this.props.name)}
                        />
                    )}
                </div>
            </div>
        )
    }
}
export default CarCard
CarCard.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    article: PropTypes.number,
}
