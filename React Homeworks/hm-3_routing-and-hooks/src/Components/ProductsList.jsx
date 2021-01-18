import React from 'react'
import Card from './Card'

export const ProductsList = (props) => {
    return (
        <div className="container">
            <h3 className="section-headers">Каталог товаров</h3>
            <div className="cars-gallery">
                {props.products.map((product) => (
                    <Card
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
                        onConfrimBtnClick={() => props.onConfrimBtnClick(product.name, product.price)}
                    />
                ))}
            </div>
        </div>
    )
}
export default ProductsList
