import React from 'react'
import CartIcon from './CartIcon.jsx'
import Button from './Button.jsx'
export const Cart = () => {
    return (
        <Button classList="btn cart-btn" backgroundColor="#28a745" onClick={() => false}>
            <CartIcon />
        </Button>
    )
}
export default Cart
