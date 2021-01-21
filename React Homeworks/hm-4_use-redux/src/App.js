import { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/App.scss'
import MainPage from './Components/MainPage.jsx'
import { getData, addProductToCart, removeProductFromCart, toggleIsFavoriteProduct } from './store/index.js'

const mapStateToProps = (state) => ({ products: state.products, cartList: state.cartList, cartSum: state.cartSum, modal: state.modal })

export const App = connect(mapStateToProps, { getData, addProductToCart, removeProductFromCart, toggleIsFavoriteProduct })((props) => {
    useEffect(() => props.getData(), [])

    return (
        <Router>
            <MainPage
                products={props.products}
                cartList={props.cartList}
                cartSum={props.cartSum}
                modal={props.modal}
                toggleIsFavoriteProduct={props.toggleIsFavoriteProduct}
                addProductToCart={props.addProductToCart}
                removeProductFromCart={props.removeProductFromCart}
            />
        </Router>
    )
})

export default App
