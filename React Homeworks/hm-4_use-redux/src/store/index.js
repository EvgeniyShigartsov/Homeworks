import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    products: [],
    cartList: [],
    cartSum: 0,
}

const SET_CART_LIST = 'SET_CART_LIST'
const SET_FETCHED_DATA = 'SET_FETCHED_DATA'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FETCHED_DATA: {
            return {
                ...state,
                products: [...action.payload.products],
                cartList: [...action.payload.cartList],
                cartSum: action.payload.cartSum,
            }
        }
        case SET_CART_LIST: {
            return {
                ...state,
                cartList: [...action.payload.cartList],
                cartSum: action.payload.cartSum,
            }
        }
        default: {
            return state
        }
    }
}

export const setCartList = (payload) => ({ type: 'SET_CART_LIST', payload })
export const setFetchedData = (payload) => ({ type: 'SET_FETCHED_DATA', payload })

const getSum = (arrayOfProducts) => arrayOfProducts.reduce((acc, product) => (acc += product.price), 0) // Helper

export const addProductToCart = (products, productName, productPrice) => (dispatch) => {
    localStorage.setItem(productName, productPrice)
    const newCartList = products.filter((product) => localStorage.getItem(product.name))
    const newCartSum = getSum(newCartList)

    const updatedCartState = {
        cartList: newCartList,
        cartSum: newCartSum,
    }
    dispatch(setCartList(updatedCartState))
}

export const removeProductFromCart = (cartList, productName) => (dispatch) => {
    localStorage.removeItem(productName)
    const newCartList = cartList.filter((product) => product.name !== productName)
    const newCartSum = getSum(newCartList)

    const updatedCartState = {
        cartList: newCartList,
        cartSum: newCartSum,
    }
    dispatch(setCartList(updatedCartState))
}

const string = `

// const checkIsFavoriteProduct = (productName) => {
    //     const res = products.find((product) => product.name === productName)
    //     if (res) {
    //         const newState = [...products]
    //         for (let item of newState) {
    //             if (item.name === res.name) {
    //                 item.isFavorite = !item.isFavorite
    //                 break
    //             }
    //         }
    //         setProducts(() => newState)
    //     }
    // }
`

export const getData = () => async (dispatch) => {
    try {
        const res = await fetch('./products.json')
        const data = await res.json()

        const products = data.products
        const productsAddedtoCart = products.filter((product) => localStorage.getItem(product.name))
        const getCartSum = productsAddedtoCart.reduce((acc, product) => (acc += product.price), 0)

        const newState = {
            products: products,
            cartList: productsAddedtoCart,
            cartSum: getCartSum,
        }
        dispatch(setFetchedData(newState))
    } catch (error) {
        alert(`getData func error`)
        console.log(error)
    }
}

export const store = createStore(reducer, applyMiddleware(thunk))
export default store
