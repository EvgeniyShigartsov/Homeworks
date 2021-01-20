import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button.jsx'

export const Modal = (props) => {
    return (
        <div>
            <div id="modal-wrapper" className="modal-wrapper" onClick={props.onWrapperClick}>
                <div className="modal-pop-up">
                    <div className="modal-content">
                        <h3 className="modal-header">{props.header}</h3>
                        <div className="modal-body">
                            <p>{props.text}</p>
                            <div className="modal-children">{props.children}</div>
                        </div>
                        <div className="modal-footer">
                            <Button classList="btn" backgroundColor="#6c757d" text={props.btnText.cancel} onClick={props.onCancelBtnClick} />
                            <Button classList="btn" backgroundColor="#28a745" text={props.btnText.ok} onClick={props.onConfrimBtnClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onWrapperClick: PropTypes.func,
    onCancelBtnClick: PropTypes.func,
    onConfrimBtnClick: PropTypes.func,
    header: PropTypes.string,
    text: PropTypes.string,
    back: PropTypes.string,
    add: PropTypes.string,
}
