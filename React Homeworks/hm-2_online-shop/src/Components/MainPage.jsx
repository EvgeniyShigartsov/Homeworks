import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CarCard from './CarCard.jsx'

const MainPage = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => getData(), [])

    const getData = async () => {
        const res = await fetch('./cars.json')
        const data = await res.json()
        setProducts((prev) => [...prev, ...data.cars])
    }
    return (
        <div className="container">
            <div className="cars-gallery">
                {products.map((car) => (
                    <CarCard src={car.url} name={car.name} price={car.price} color={car.color} article={car.article} key={car.url} />
                ))}
            </div>
        </div>
    )
}
export default MainPage
MainPage.propTypes = {
    carsArr: PropTypes.array,
}
