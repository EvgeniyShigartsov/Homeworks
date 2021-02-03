import { useDispatch, useSelector } from 'react-redux'
import { logOut, selectAuthStatus } from '../store/auth.js'
import { Button } from 'antd'

export const LogOutBtn = () => {
    const authStatus = useSelector(selectAuthStatus)
    const dispatch = useDispatch()

    const onClickHandler = () => dispatch(logOut())

    return authStatus ? <Button onClick={onClickHandler}>LogOut</Button> : null
}
