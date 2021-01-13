import React from 'react'
import cars from './Cars.jsx'
import CarCard from './CarCard.jsx'
import PropTypes from 'prop-types'

export default class MainPage extends React.Component {
    constructor(props) {
        super(props)

        this.carsArr = cars()
        this.state = {
            product: [],
        }
    }
    componentDidMount() {}
    render() {
        return (
            <div className="container">
                <div className="cars-gallery">
                    {this.carsArr.map((car) => (
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
