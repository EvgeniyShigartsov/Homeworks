import React from 'react'
import CartIcon from './CartIcon.jsx'
import Button from './Button.jsx'
import Card from './Card.jsx'

export const Cart = (props) => {
    const modalFields = {
        header: 'Удаление из корзины',
        text: 'Удалить этот товар из корзины ?',
        btnText: {
            ok: 'Удалить',
            cancel: 'Назад',
        },
    }

    return (
        <section className="cart-section">
            <div className="container">
                <Button classList="btn cart-btn">
                    <CartIcon />
                    <div>Сумма: {props.cartSum}$</div>
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
                            showBtn={true}
                            showStar={true}
                            isFavorite={product.isFavorite}
                            cardBtnText="Удалить"
                            btnBackground="#6c757d"
                            onBtnClick={() => props.onBtnClick(product.name)}
                            modalFields={modalFields}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Cart
