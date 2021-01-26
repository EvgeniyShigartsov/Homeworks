import React from 'react'
import PropTypes from 'prop-types'

import RouterComponent from './RouterComponent.jsx'
import Banner from './Banner.jsx'
import Modal from './Modal.jsx'
import DeliveryForm from './DeliveryForm.jsx'

export const MainPage = (props) => {
    const bannerURL = 'https://e7.pngegg.com/pngimages/638/645/png-clipart-logo-banner-brand-product-design-mechanics-tool-trailer-text-logo.png'
    return (
        <div>
            <Banner bannerURL={bannerURL} />
            <Modal modal={props.modal} />
            {/* <RouterComponent
                products={props.products}
                onStarClick={props.toggleIsFavoriteProduct}
                cartList={props.cartList}
                cartSum={props.cartSum}
                addProductToCart={props.addProductToCart}
                removeProductFromCart={props.removeProductFromCart}
            /> */}
            <DeliveryForm />
        </div>
    )
}
export default MainPage
MainPage.propTypes = {
    carsArr: PropTypes.array,
}
