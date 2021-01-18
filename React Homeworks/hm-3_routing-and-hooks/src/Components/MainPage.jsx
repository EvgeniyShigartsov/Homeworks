import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Banner from './Banner.jsx'
import Favorite from './Favorite.jsx'
import ProductsList from './ProductsList.jsx'

const MainPage = () => {
    const [products, setProducts] = useState([])
    useEffect(() => getData(), [])

    const getData = async () => {
        const res = await fetch('./products.json')
        const data = await res.json()
        setProducts((prev) => [...prev, ...data.products])
    }
    const bannerURL = 'https://e7.pngegg.com/pngimages/638/645/png-clipart-logo-banner-brand-product-design-mechanics-tool-trailer-text-logo.png'

    const findProduct = (productName) => {
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
                    <Link className="nav-link" to="/favorite">
                        Избранное
                    </Link>
                </nav>
                <Route exact path="/">
                    <ProductsList products={products} onStarClick={findProduct} />
                </Route>
                <Route exact path="/favorite">
                    <Favorite products={products} onStarClick={findProduct} />
                </Route>
            </Router>
        </div>
    )
}
export default MainPage
MainPage.propTypes = {
    carsArr: PropTypes.array,
}
