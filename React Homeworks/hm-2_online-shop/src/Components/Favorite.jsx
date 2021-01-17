import React, { useEffect } from 'react'
import CarCard from './CarCard'

export const Favorite = (props) => {
    return (
        <section className="container">
            <h3>Избранные товары</h3>
            <div className="favorite-items">
                {props.products.map((product) => {
                    if (localStorage.getItem(product.name)) {
                        return (
                            <CarCard
                                name={product.name}
                                description={product.description}
                                src={product.url}
                                price={product.price}
                                article={product.article}
                                key={product.url}
                                showBtn={false}
                                showStar={true}
                                render={props.render}
                                onStarClick={props.onStarClick}
                            />
                        )
                    }
                })}
            </div>
        </section>
    )
}

export default Favorite
