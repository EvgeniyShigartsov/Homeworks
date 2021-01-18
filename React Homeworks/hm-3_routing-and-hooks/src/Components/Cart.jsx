import React from 'react'
import CartIcon from './CartIcon.jsx'
import Button from './Button.jsx'
import Modal from './Modal.jsx'
import Card from './Card.jsx'

export const Cart = (props) => {
    return (
        <section className="container">
            <Button classList="btn cart-btn" backgroundColor="#28a745">
                <CartIcon />
                <div>Сумма: 150$</div>
            </Button>
            <div className="cart-items">
                {props.cartList.map((product) => (
                    <Card
                        name={product.name}
                        description={product.description}
                        src={product.url}
                        price={product.price}
                        article={product.article}
                        key={product.url}
                        showBtn={false}
                        showStar={true}
                        isFavorite={product.isFavorite}
                    />
                ))}
            </div>
        </section>
    )
}
export default Cart
