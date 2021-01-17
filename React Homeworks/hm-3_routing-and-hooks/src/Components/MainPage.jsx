import React, { useState, useEffect } from 'react'
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
            <Banner bannerURL={bannerURL} />
            <Favorite products={products} onStarClick={findProduct} />
            <ProductsList products={products} onStarClick={findProduct} />
        </div>
    )
}
export default MainPage
MainPage.propTypes = {
    carsArr: PropTypes.array,
}
