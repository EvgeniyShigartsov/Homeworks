import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getData } from '../store/index.js'

import Banner from './Banner.jsx'
import Favorite from './Favorite.jsx'
import ProductsList from './ProductsList.jsx'
import Cart from './Cart.jsx'

const mapStateToProps = (state) => ({ products: state.products, cartList: state.cartList, cartSum: state.cartSum })

export const MainPage = connect(mapStateToProps, { getData })((props) => {
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
                <Route exact path="/">
                    <ProductsList products={props.products} onBtnClick={() => null} onStarClick={() => null} />
                </Route>
                <Route exact path="/cart">
                    <Cart cartList={props.cartList} onBtnClick={() => null} cartSum={props.cartSum} onStarClick={() => null} />
                </Route>
                <Route exact path="/favorite">
                    <Favorite products={props.products} onStarClick={() => null} />
                </Route>
            </Router>
        </div>
    )
})
export default MainPage
MainPage.propTypes = {
    carsArr: PropTypes.array,
}

const string = `
// const addProductToLocalStorage = (productName, productPrice) => {
    //     localStorage.setItem(productName, productPrice)

    //     const newCartList = products.filter((product) => localStorage.getItem(product.name))
    //     const newCartSum = newCartList.reduce((acc, product) => (acc += product.price), 0)

    //     setCartSum(() => newCartSum)
    //     setCartList(() => newCartList)
    // }
    // const removeProductFromLocalStorage = (productName) => {
    //     localStorage.removeItem(productName)

    //     const newCartList = cartList.filter((product) => product.name !== productName)
    //     const newCartSum = newCartList.reduce((acc, product) => (acc += product.price), 0)

    //     setCartSum(() => newCartSum)
    //     setCartList(() => newCartList)
    // }


// const checkIsFavoriteProduct = (productName) => {
    //     const res = products.find((product) => product.name === productName)
    //     if (res) {
    //         const newState = [...products]
    //         for (let item of newState) {
    //             if (item.name === res.name) {
    //                 item.isFavorite = !item.isFavorite
    //                 break
    //             }
    //         }
    //         setProducts(() => newState)
    //     }
    // }
`
