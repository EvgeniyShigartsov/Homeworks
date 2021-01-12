import React from 'react'
import Button from './Button.jsx'
import '../App.scss'
export { Modal }

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { active: false }
        this.closeBtn = <Button classList="close-btn" text="X" backgroundColor="#ccc" onClick={this.setActive} />
    }
    setActive = () => {
        this.setState({ active: !this.state.active })
    }
    modalWrapperHandler = (e) => {
        if (!e.target.classList.contains('modal-wrapper')) return
        this.setState({ active: false })
    }

    render() {
        return (
            <div>
                <Button classList="btn" backgroundColor={this.props.openBtnBackground} text={this.props.btnToOpen} onClick={this.setActive} />
                {this.state.active && (
                    <div className="modal-wrapper" onClick={this.modalWrapperHandler}>
                        <div className="modal-pop-up">
                            <div className="modal-content">
                                {this.props.closeButton ? this.closeBtn : ''}
                                <h3 className="modal-header">{this.props.header}</h3>
                                <div className="modal-body">
                                    <p>{this.props.text}</p>
                                </div>
                                <div className="modal-footer">
                                    <Button classList="btn" backgroundColor="#17a2b8" text={this.props.btnText.cancel} onClick={this.setActive} />
                                    <Button classList="btn" backgroundColor="#dc3545" text={this.props.btnText.ok} onClick={this.setActive} />
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
