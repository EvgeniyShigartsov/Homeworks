import { message } from 'antd'

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

export const createUser = (email, password, history) => async (dispatch) => {
    try {
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, returnSecureToken: true }),
        }

        const data = await createRequest('signUp', reqObj)
        console.log(data)

        if (data.idToken) {
            localStorage.setItem('idToken', data.idToken)
            console.log('succes')
            dispatch(authSucces())
            history.push('/homepage')
        }
    } catch (err) {
        alert('createUser func error')
        console.log(err)
    }
}

export const loginUser = (email, password, history) => async (dispatch) => {
    try {
        const key = localStorage.getItem('idToken')
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, returnSecureToken: true }),
        }
        if (key) {
            const data = await createRequest('signInWithPassword', reqObj)
            if (data.registered) {
                localStorage.setItem('idToken', data.idToken)
                dispatch(authSucces())
                history.push('/homepage')
            } else {
                message.error('Incorrect email or password.')
            }
        }
    } catch (err) {
        alert('loginUser func error')
        console.log(err)
    }
}

export const createRequest = async (paramsAction, reqObj) => {
    const KEY_API = '?key=AIzaSyATwHBf3gl0bcO6RFOdbrSpgiv8YN_9Ihk'
    const DOMAIN = 'https://identitytoolkit.googleapis.com/v1/accounts:'

    const request = await fetch(`${DOMAIN}${paramsAction}${KEY_API}`, reqObj)
    const data = await request.json()
    return data
}
