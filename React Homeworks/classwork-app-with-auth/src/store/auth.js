import { message } from 'antd'
import { saveUserDataInLS, isMatchDataInLocalStorage } from '../utils/authWithLS.js'

const AUTH_SUCCES = 'AUTH_SUCCES'
const LOG_OUT = 'LOG_OUT'

export const MODULE_NAME = 'auth'
export const selectAuthStatus = (state) => state[MODULE_NAME].isAutorizated

const initialState = {
    isAutorizated: false,
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case AUTH_SUCCES: {
            return {
                ...state,
                isAutorizated: true,
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isAutorizated: false,
            }
        }
        default: {
            return state
        }
    }
}

export const authSucces = () => ({ type: 'AUTH_SUCCES' })
export const logOut = () => ({ type: 'LOG_OUT' })

export const createUser = (username, password, history) => (dispatch) => {
    try {
        saveUserDataInLS(username, password)
        dispatch(authSucces())
        history.push('/homepage')
    } catch (err) {
        alert('createUser func error')
        console.log(err)
    }
}

export const loginUser = (username, password, history) => (dispatch) => {
    try {
        const isMatch = isMatchDataInLocalStorage({ username, password })
        if (isMatch) {
            dispatch(authSucces())
            history.push('/homepage')
        } else {
            message.error('Incorrect login or password.')
        }
    } catch (err) {
        alert('loginUser func error')
        console.log(err)
    }
}
