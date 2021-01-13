import React from 'react'
import CarCard from './CarCard.jsx'
import PropTypes from 'prop-types'

export default class MainPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            product: [],
        }
    }
    componentDidMount() {
        this.getData = async () => {
            const res = await fetch('./cars.json')
            const data = await res.json()
            this.setState({ product: [...this.state.product, ...data.cars] })
        }
        this.getData()
    }
    render() {
        return (
            <div className="container">
                <div className="cars-gallery">
                    {this.state.product.map((car) => (
                        <CarCard src={car.url} name={car.name} price={car.price} color={car.color} article={car.article} key={car.url} />
                    ))}
                </div>
            </div>
        )
    }
}
MainPage.propTypes = {
    carsArr: PropTypes.array,
}
