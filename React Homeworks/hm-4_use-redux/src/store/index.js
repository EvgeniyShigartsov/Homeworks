import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    products: [],
    cartList: [],
    cartSum: 0,
}

const SET_PRODUCTS_LIST = 'SET_PRODUCTS_LIST'
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
        case SET_PRODUCTS_LIST: {
            return {
                ...state,
                products: [...action.payload.products],
            }
        }
        case SET_CART_LIST: {
            return {
                ...state,
                cartList: [action.payload.cartList],
                cartSum: action.payload.cartSum,
            }
        }
        default: {
            return state
        }
    }
}

export const setProductsList = (payload) => ({ type: 'SET_PRODUCTS_LIST', payload })
export const setCartList = (payload) => ({ type: 'SET_CART_LIST', payload })
export const setFetchedData = (payload) => ({ type: 'SET_FETCHED_DATA', payload })

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
        alert(error)
    }
}

export const store = createStore(reducer, applyMiddleware(thunk))
export default store
