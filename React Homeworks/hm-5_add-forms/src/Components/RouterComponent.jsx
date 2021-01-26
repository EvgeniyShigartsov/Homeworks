import React from 'react'
import { Route, Link } from 'react-router-dom'

import Favorite from './Favorite.jsx'
import ProductsList from './ProductsList.jsx'
import Cart from './Cart.jsx'

export const RouterComponent = (props) => {
    return (
        <div>
            <nav className="navigation">
                <Link className="nav-link" to="/">
                    Каталог
                </Link>
                <Link className="nav-link" to="/cart">
                    Корзина
                </Link>
                <Link className="nav-link" to="/favorite">
                    Избранное
                </Link>
            </nav>
            <Route exact path="/">
                <ProductsList products={props.products} onBtnClick={props.addProductToCart} onStarClick={props.onStarClick} />
            </Route>
            <Route exact path="/cart">
                <Cart cartList={props.cartList} allProducts={props.products} onBtnClick={props.removeProductFromCart} cartSum={props.cartSum} onStarClick={props.onStarClick} />
            </Route>
            <Route exact path="/favorite">
                <Favorite products={props.products} onStarClick={props.onStarClick} />
            </Route>
        </div>
    )
}
export default RouterComponent
