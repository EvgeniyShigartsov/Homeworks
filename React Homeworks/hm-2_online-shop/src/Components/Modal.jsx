import React from 'react'
import Button from './Button.jsx'
import '../App.scss'
import PropTypes from 'prop-types'

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { active: true }
    }

    render() {
        return (
            <div>
                {this.props.isOpen && (
                    <div id="modal-wrapper" className="modal-wrapper" onClick={this.props.onWrapperClick}>
                        <div className="modal-pop-up">
                            <div className="modal-content">
                                <h3 className="modal-header">{this.props.header}</h3>
                                <div className="modal-body">
                                    <p>{this.props.text}</p>
                                    <div className="modal-children">{this.props.children}</div>
                                </div>
                                <div className="modal-footer">
                                    <Button classList="btn" backgroundColor="#6c757d" text={this.props.btnText.back} onClick={this.props.onCancelBtnClick} />
                                    <Button classList="btn" backgroundColor="#28a745" text={this.props.btnText.add} onClick={this.props.onConfrimBtnClick} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
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
