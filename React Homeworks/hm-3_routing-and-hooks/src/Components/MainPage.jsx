import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Banner from './Banner.jsx'
import Favorite from './Favorite.jsx'
import ProductsList from './ProductsList.jsx'
import Cart from './Cart.jsx'

const MainPage = () => {
    const [products, setProducts] = useState([])
    const [cartList, setCartList] = useState([])
    const [cartSum, setCartSum] = useState(0)
    useEffect(() => getData(), [])

    const addProductToLocalStorage = (productName, productPrice) => {
        localStorage.setItem(productName, productPrice)

        const newCartList = products.filter((product) => localStorage.getItem(product.name))
        const newCartSum = newCartList.reduce((acc, product) => (acc += product.price), 0)

        setCartSum(() => newCartSum)
        setCartList(() => newCartList)
    }
    const removeProductFromLocalStorage = (productName) => {
        localStorage.removeItem(productName)

        const newCartList = cartList.filter((product) => product.name !== productName)
        const newCartSum = newCartList.reduce((acc, product) => (acc += product.price), 0)

        setCartSum(() => newCartSum)
        setCartList(() => newCartList)
    }

    const getData = async () => {
        const res = await fetch('./products.json')
        const data = await res.json()
        setProducts(() => data.products)

        const chekProductInLocalStorage = data.products.filter((product) => localStorage.getItem(product.name))
        const getCartSum = chekProductInLocalStorage.reduce((acc, product) => (acc += product.price), 0)
        setCartSum(() => getCartSum)
        setCartList(() => chekProductInLocalStorage)
    }
    const bannerURL = 'https://e7.pngegg.com/pngimages/638/645/png-clipart-logo-banner-brand-product-design-mechanics-tool-trailer-text-logo.png'

    const checkIsFavoriteProduct = (productName) => {
        const res = products.find((product) => product.name === productName)
        if (res) {
            const newState = [...products]
            for (let item of newState) {
                if (item.name === res.name) {
                    item.isFavorite = !item.isFavorite
                    break
                }
            }
            setProducts(() => newState)
        }
    }

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
                    <ProductsList products={products} onBtnClick={addProductToLocalStorage} onStarClick={checkIsFavoriteProduct} />
                </Route>
                <Route exact path="/cart">
                    <Cart cartList={cartList} onBtnClick={removeProductFromLocalStorage} cartSum={cartSum} />
                </Route>
                <Route exact path="/favorite">
                    <Favorite products={products} onStarClick={checkIsFavoriteProduct} />
                </Route>
            </Router>
        </div>
    )
}
export default MainPage
MainPage.propTypes = {
    carsArr: PropTypes.array,
}
