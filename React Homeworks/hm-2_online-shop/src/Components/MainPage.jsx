import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CarCard from './CarCard.jsx'
import Banner from './Banner.jsx'
import Favorite from './Favorite.jsx'

const MainPage = () => {
    const [products, setProducts] = useState([])
    const [render, setRender] = useState(false)
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
            <Favorite products={products} render={render} onStarClick={() => setRender((prev) => !prev)} />
            <div className="container">
                <div className="cars-gallery">
                    {products.map((product) => (
                        <CarCard
                            name={product.name}
                            description={product.description}
                            src={product.url}
                            price={product.price}
                            article={product.article}
                            key={product.url}
                            showBtn={true}
                            showStar={true}
                            render={render}
                            onStarClick={() => setRender((prev) => !prev)}
                        />
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
