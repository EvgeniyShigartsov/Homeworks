import './App.css'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import SignUp from './components/SignUp'
import SignIn from './components/SIgnIn'
import { Homepage } from './components/Homepage'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './common/PrivateRoute'

function App() {
    return (
        <Router>
            <Container>
                <Link to="/homepage">Homepage</Link>
            </Container>
            <Container>
                <Switch>
                    <PrivateRoute path="/homepage">
                        <Homepage />
                    </PrivateRoute>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/signin">
                        <SignIn />
                    </Route>
                </Switch>
            </Container>
        </Router>
    )
}
const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 15px;
`

export default App
