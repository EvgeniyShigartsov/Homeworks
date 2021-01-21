import React from 'react'
import PropTypes from 'prop-types'
import StarSvg from './StarSvg.jsx'
import Button from './Button.jsx'

const CarCard = (props) => {
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
                {props.showBtn && <Button classList="btn-card card-field" onClick={() => null} backgroundColor={props.btnBackground} text={props.cardBtnText} />}
            </div>
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

const srt = `
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


const modalWrapperHandler = (e) => {
    if (e.target.id !== 'modal-wrapper') return
    setIsOpenModal(false)
}
const callPropsFuncAndCloseModal = () => {
    props.onBtnClick()
    setIsOpenModal(false)
}
`
