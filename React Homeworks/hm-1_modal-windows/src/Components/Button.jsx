import React from 'react'
export { Button }
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
