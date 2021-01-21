import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    products: [],
    cartList: [],
    cartSum: 0,
    modal: {
        isOpen: false,
        content: {
            modalFields: {
                header: '',
                text: '',
                btnText: {
                    ok: '',
                    cancel: '',
                },
            },
            modalContent: {
                productName: '',
                description: '',
                price: '',
                article: '',
            },
            actions: {
                onWrapperClick: () => null,
                onCancelBtnClick: () => null,
                onConfrimBtnClick: () => null,
            },
        },
    },
}

const SET_CART_LIST = 'SET_CART_LIST'
const SET_FETCHED_DATA = 'SET_FETCHED_DATA'
const TOGGLE_IS_FAVORITE = 'TOGGLE_IS_FAVORITE'
const SHOW_MODAL = 'SHOW_MODAL'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FETCHED_DATA: {
            return {
                ...state,
                products: action.payload.products,
                cartList: action.payload.cartList,
                cartSum: action.payload.cartSum,
            }
        }
        case SET_CART_LIST: {
            return {
                ...state,
                cartList: action.payload.cartList,
                cartSum: action.payload.cartSum,
            }
        }
        case TOGGLE_IS_FAVORITE: {
            return {
                ...state,
                products: action.payload,
            }
        }
        case SHOW_MODAL: {
            console.log(action)
            return {
                ...state,
                modal: {
                    isOpen: !state.modal.isOpen,
                    content: action.payload || state.modal.content, // при закрытии модального окна поля уже не нужны, но что бы не ломать общуюю структуру оставляю те поля что были. Что бы быть уверенным что ничего не сломается из-за неправильной структуры.
                },
            }
        }
        default: {
            return state
        }
    }
}

//action creators
const setCartList = (payload) => ({ type: 'SET_CART_LIST', payload })
const setFetchedData = (payload) => ({ type: 'SET_FETCHED_DATA', payload })
const toggleIsFavorite = (payload) => ({ type: 'TOGGLE_IS_FAVORITE', payload })
const showModal = (payload) => ({ type: 'SHOW_MODAL', payload })

// Helper
const getSum = (arrayOfProducts) => arrayOfProducts.reduce((acc, product) => (acc += product.price), 0)

export const modalHandler = (modalContent) => (dispatch) => dispatch(showModal(modalContent))

export const addProductToCart = (products, productName, productPrice) => (dispatch) => {
    localStorage.setItem(productName, productPrice)
    const newCartList = products.filter((product) => localStorage.getItem(product.name))
    const newCartSum = getSum(newCartList)

    const updatedCartState = {
        cartList: newCartList,
        cartSum: newCartSum,
    }
    dispatch(setCartList(updatedCartState))
    dispatch(showModal(modalHandler(null))) // закрытие модального окна
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
    dispatch(showModal(modalHandler(null))) // закрытие модального окна
}
export const toggleIsFavoriteProduct = (allProducts, productName) => (dispatch) => {
    const product = allProducts.find((product) => product.name === productName)

    if (product) {
        const productsWillUpdated = [...allProducts]

        for (let currentProduct of productsWillUpdated) {
            if (currentProduct.name === product.name) {
                currentProduct.isFavorite = !currentProduct.isFavorite
                break
            }
        }
        dispatch(toggleIsFavorite(productsWillUpdated))
    }
}

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
