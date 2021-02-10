import './styles/App.scss'
import MainPage from './Components/MainPage.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index'
import { BrowserRouter as Router } from 'react-router-dom'
export const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <MainPage />
            </Router>
        </Provider>
    )
}

export default App
