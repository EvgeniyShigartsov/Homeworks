import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal.jsx'
import CarInfo from './CarInfo.jsx'

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
    const checkItemInLocalStorage = (itemName) => {
        localStorage.getItem(itemName) ? localStorage.removeItem(itemName) : localStorage.setItem(itemName, itemName)
        setIsOpenModal(() => false)
    }
    const modalWrapperHandler = (e) => {
        if (e.target.id !== 'modal-wrapper') return
        setIsOpenModal(() => false)
    }
    return (
        <div className="card-wrapper">
            <img className="car-img" src={props.src} alt={props.name} />
            <CarInfo name={props.name} price={props.price} article={props.article} color={props.color} showStar={true} showBtn={true} onBtnClick={() => setIsOpenModal((prev) => !prev)} />
            {isOpenModal && (
                <Modal
                    text={modalFields.text}
                    header={modalFields.header}
                    btnText={modalFields.btnText}
                    isOpen={isOpenModal}
                    onWrapperClick={modalWrapperHandler}
                    onCancelBtnClick={() => setIsOpenModal((prev) => !prev)}
                    onConfrimBtnClick={() => checkItemInLocalStorage(props.name)}
                >
                    <CarInfo name={props.name} price={props.price} article={props.article} color={props.color} />
                </Modal>
            )}
        </div>
    )
}
export default CarCard
CarCard.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    article: PropTypes.number,
}
