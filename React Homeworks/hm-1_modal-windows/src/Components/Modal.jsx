import React from 'react'
import Button from './Button.jsx'
import '../App.scss'
export { Modal }

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.closeBtn = <Button classList="close-btn" text="X" backgroundColor="#ccc" onClick={() => this.props.setActive(false)} />
    }
    render() {
        return (
            <div className={this.props.active ? 'modal-wrapper' : 'modal-wrapper display-none'} onClick={() => this.props.setActive(false)}>
                <div className="modal-pop-up" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content">
                        {this.props.closeButton ? this.closeBtn : null}
                        <h3 className="modal-header">{this.props.header}</h3>
                        <div className="modal-body">
                            <p>{this.props.text}</p>
                        </div>
                        <div className="modal-footer">
                            <Button classList="btn modal-btn--two" backgroundColor="#17a2b8" text={this.props.btnText.cancel} onClick={() => this.props.setActive(false)} />
                            <Button classList="btn modal-btn--one" backgroundColor="#dc3545" text={this.props.btnText.ok} onClick={() => this.props.setActive(false)} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
