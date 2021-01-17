import React from 'react'
import CarCard from './Card'

export const Favorite = (props) => {
    return (
        <section className="container">
            <h3>Избранные товары</h3>
            <div className="favorite-items">
                {props.products.map((product) => {
                    if (product.isFavorite) {
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
                                isFavorite={product.isFavorite}
                                onStarClick={() => props.onStarClick(product.name)}
                            />
                        )
                    }
                })}
            </div>
        </section>
    )
}

export default Favorite
