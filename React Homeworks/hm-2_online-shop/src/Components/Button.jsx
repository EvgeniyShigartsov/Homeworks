import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
    render() {
        return (
            <button className={this.props.classList} style={{ backgroundColor: this.props.backgroundColor }} onClick={this.props.onClick}>
                {this.props.text}
            </button>
        )
    }
}
export default Button

Button.propTypes = {
    classList: PropTypes.string,
    backgroundColor: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}
