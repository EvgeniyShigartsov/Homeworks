import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal.jsx'
import StarSvg from './StarSvg.jsx'
import Button from './Button.jsx'

const CarCard = (props) => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const modalWrapperHandler = (e) => {
        if (e.target.id !== 'modal-wrapper') return
        setIsOpenModal(false)
    }
    const callPropsFuncAndCloseModal = () => {
        props.onBtnClick()
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
                {props.showBtn && <Button classList="btn-card card-field" onClick={() => setIsOpenModal(true)} backgroundColor={props.btnBackground} text={props.cardBtnText} />}
            </div>

            {isOpenModal && (
                <Modal
                    text={props.modalFields.text}
                    header={props.modalFields.header}
                    btnText={props.modalFields.btnText}
                    isOpen={isOpenModal}
                    onWrapperClick={modalWrapperHandler}
                    onCancelBtnClick={() => setIsOpenModal(false)}
                    onConfrimBtnClick={callPropsFuncAndCloseModal}
                >
                    <div className="card-info">
                        <div className="title-group card-field">
                            <h4 className="card-title">{props.name}</h4>
                        </div>
                        <p className="card-field">{props.description}</p>
                        <p className="card-field">
                            Цена: {props.price}
                            <span>$</span>
                        </p>
                        <p className="card-field">Код товара: {props.article}</p>
                    </div>
                </Modal>
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
