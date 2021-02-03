import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const mapStateToProps = (state) => ({ isAutorizated: state.auth.isAutorizated })

export const PrivateRoute = connect(
    mapStateToProps,
    null
)(({ isAutorizated, children, ...props }) => {
    return <Route {...props}>{isAutorizated ? children : <Redirect to="/signin" />}</Route>
})
