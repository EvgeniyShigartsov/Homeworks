import React from 'react'
import CartIcon from './CartIcon.jsx'
import Button from './Button.jsx'
import Card from './Card.jsx'

export const Cart = (props) => {
    const allProducts = props.allProducts
    const modalFields = {
        header: 'Удаление из корзины',
        text: 'Удалить этот товар из корзины ?',
        btnText: {
            ok: 'Удалить',
            cancel: 'Назад',
        },
    }
    const cartList = props.cartList.map((product, _, cartList) => (
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
            onBtnClick={() => props.onBtnClick(cartList, product.name)}
            onStarClick={() => props.onStarClick(allProducts, product.name)}
            modalFields={modalFields}
        />
    ))

    return (
        <section className="cart-section">
            <div className="container">
                <Button classList="btn cart-btn">
                    <CartIcon />
                    <div>Сумма: {props.cartSum}$</div>
                </Button>
                <div className="cart-items">{cartList.length ? cartList : <span>Корзина пуста.</span>}</div>
            </div>
        </section>
    )
}
export default Cart
