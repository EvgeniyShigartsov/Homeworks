import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal.jsx'
import StarSvg from './StarSvg.jsx'
import Button from './Button.jsx'

const CarCard = (props) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const modalFields = {
        header: 'Add to cart',
        text: `Add to cart this product ?`,
        btnText: {
            add: 'Add to cart',
            back: 'Back',
        },
    }

    const modalWrapperHandler = (e) => {
        if (e.target.id !== 'modal-wrapper') return
        setIsOpenModal(false)
    }
    return (
        <div className="card-wrapper">
            <img className="card-img" src={props.src} alt={props.name} />
            <div className="card-info">
                <div className="title-group card-field">
                    <h4 className="card-title">{props.name}</h4>
                    {props.showStar && <StarSvg isFavorite={props.isFavorite} onStarClick={props.onStarClick} />}
                </div>
                <p className="card-field">{props.description}</p>
                <p className="card-field">
                    Цена: {props.price}
                    <span>$</span>
                </p>
                <p className="card-field">Код товара: {props.article}</p>
                {props.showBtn && <Button classList="btn-cart card-field" onClick={() => setIsOpenModal(true)} backgroundColor="#28a745" text="Add to cart" />}
            </div>

            {isOpenModal && (
                <Modal
                    text={modalFields.text}
                    header={modalFields.header}
                    btnText={modalFields.btnText}
                    isOpen={isOpenModal}
                    onWrapperClick={modalWrapperHandler}
                    onCancelBtnClick={() => setIsOpenModal(false)}
                    onConfrimBtnClick={() => setIsOpenModal(false)}
                ></Modal>
            )}
        </div>
    )
}
export default CarCard
CarCard.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    article: PropTypes.number,
}
