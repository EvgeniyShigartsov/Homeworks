import React from 'react'
import cars from './Cars.jsx'
import CarCard from './CarCard.jsx'

export default class MainPage extends React.Component {
    constructor(props) {
        super(props)

        this.carsArr = cars()
        this.state = {
            product: [],
        }
        this.modalOne = {
            header: 'Add to cart',
            text: `Add to cart this product`,
            openBtn: {
                text: 'Open first modal',
                backgroundColor: '#007bff',
            },
            btnText: {
                add: 'Add to cart',
                back: 'Back',
            },
        }
    }
    componentDidMount() {}
    render() {
        return (
            <div className="container">
                <div className="cars-gallery">
                    {this.carsArr.map((car) => (
                        <CarCard src={car.url} name={car.name} price={car.price} color={car.color} article={car.article}></CarCard>
                    ))}
                </div>
            </div>
        )
    }
}
