import React from 'react'
import CarCard from './Card'

export const ProductsList = (props) => {
    return (
        <div className="container">
            <div className="cars-gallery">
                {props.products.map((product) => (
                    <CarCard
                        name={product.name}
                        description={product.description}
                        src={product.url}
                        price={product.price}
                        article={product.article}
                        key={product.url}
                        showBtn={true}
                        showStar={true}
                        isFavorite={product.isFavorite}
                        onStarClick={() => props.onStarClick(product.name)}
                    />
                ))}
            </div>
        </div>
    )
}
export default ProductsList
