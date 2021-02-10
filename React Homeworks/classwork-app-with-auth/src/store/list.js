import { OmitProps } from 'antd/lib/transfer/ListBody'
import React from 'react'
import { createRequest } from './auth.js'

const SET_LIST = 'SET_LIST'
export const MODULE_NAME = 'list'

const initialState = {
    listItems: {},
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LIST: {
            return {
                ...state,
                listItems: payload,
            }
        }
        default: {
            return state
        }
    }
}

const setListCreator = (payload) => ({ type: 'SET_LIST', payload })

export const setList = () => async (dispatch) => {
    try {
        const idToken = localStorage.getItem('idToken')
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ idToken }),
        }

        const request = await fetch('https://lesson-app-with-auth-default-rtdb.europe-west1.firebasedatabase.app/test.json', reqObj)
        const data = await request.json()
        console.log(data)
    } catch (err) {
        alert('set list funk error')
        console.log(err)
    }
}
