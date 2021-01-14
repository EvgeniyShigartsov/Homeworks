import React from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal.jsx'
import CarInfo from './CarInfo.jsx'

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
                <CarInfo
                    name={this.props.name}
                    price={this.props.price}
                    article={this.props.article}
                    color={this.props.color}
                    showStar={true}
                    showBtn={true}
                    onStarClick={() => this.checkItemInLocalStorage(this.props.name)}
                    onBtnClick={() => this.setState({ isOpenModal: !this.state.isOpenModal })}
                />
                {this.state.isOpenModal && (
                    <Modal
                        text={this.modalFields.text}
                        header={this.modalFields.header}
                        btnText={this.modalFields.btnText}
                        isOpen={this.state.isOpenModal}
                        onWrapperClick={this.modalWrapperHandler}
                        onCancelBtnClick={() => this.setState({ isOpenModal: !this.state.isOpenModal })}
                        onConfrimBtnClick={() => this.checkItemInLocalStorage(this.props.name)}
                    >
                        <CarInfo name={this.props.name} price={this.props.price} article={this.props.article} color={this.props.color} />
                    </Modal>
                )}
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
