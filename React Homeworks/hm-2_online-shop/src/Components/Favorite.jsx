import React, { useEffect } from 'react'
import CarInfo from './CarInfo'

export const Favorite = (props) => {
    useEffect(() => true, [localStorage])
    return (
        <section className="favorite-section">
            <h3>Избранные товары</h3>
            <div className="favorite-items">
                {props.items.map((item, idx) => {
                    if (localStorage.getItem(item.name)) {
                        return <CarInfo key={idx} name={item.name} showStar={true} isFavorite={true} description={item.description} price={item.price} article={item.article} />
                    }
                })}
            </div>
        </section>
    )
}

export default Favorite
