import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CarCard from './CarCard.jsx'
import Banner from './Banner.jsx'
// import Cart from './Cart.jsx'
import Favorite from './Favorite.jsx'

const MainPage = () => {
    const [products, setProducts] = useState([])
    useEffect(() => getData(), [])

    const getData = async () => {
        const res = await fetch('./products.json')
        const data = await res.json()
        setProducts((prev) => [...prev, ...data.cars])
    }
    const bannerURL = 'https://e7.pngegg.com/pngimages/638/645/png-clipart-logo-banner-brand-product-design-mechanics-tool-trailer-text-logo.png'

    return (
        <div>
            <Banner bannerURL={bannerURL} />
            <div className="container">
                <Favorite items={products} />
                <div className="cars-gallery">
                    {products.map((product) => (
                        <CarCard src={product.url} name={product.name} price={product.price} description={product.description} article={product.article} key={product.url} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default MainPage
MainPage.propTypes = {
    carsArr: PropTypes.array,
}
