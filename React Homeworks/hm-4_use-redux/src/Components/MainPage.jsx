import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getData, addProductToCart, removeProductFromCart, toggleIsFavoriteProduct } from '../store/index.js'

import Banner from './Banner.jsx'
import Favorite from './Favorite.jsx'
import ProductsList from './ProductsList.jsx'
import Cart from './Cart.jsx'
import Modal from './Modal.jsx'

const mapStateToProps = (state) => ({ products: state.products, cartList: state.cartList, cartSum: state.cartSum, modal: state.modal })

export const MainPage = connect(mapStateToProps, { getData, addProductToCart, removeProductFromCart, toggleIsFavoriteProduct })((props) => {
    useEffect(() => props.getData(), [])

    const bannerURL = 'https://e7.pngegg.com/pngimages/638/645/png-clipart-logo-banner-brand-product-design-mechanics-tool-trailer-text-logo.png'

    return (
        <div>
            <Router>
                <Banner bannerURL={bannerURL} />
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
                <Modal modal={props.modal} />
                <Route exact path="/">
                    <ProductsList products={props.products} onBtnClick={props.addProductToCart} onStarClick={props.toggleIsFavoriteProduct} />
                </Route>
                <Route exact path="/cart">
                    <Cart cartList={props.cartList} allProducts={props.products} onBtnClick={props.removeProductFromCart} cartSum={props.cartSum} onStarClick={props.toggleIsFavoriteProduct} />
                </Route>
                <Route exact path="/favorite">
                    <Favorite products={props.products} onStarClick={props.toggleIsFavoriteProduct} />
                </Route>
            </Router>
        </div>
    )
})
export default MainPage
MainPage.propTypes = {
    carsArr: PropTypes.array,
}
