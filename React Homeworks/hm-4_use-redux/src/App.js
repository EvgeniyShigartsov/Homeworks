import './App.scss'
import { Provider } from 'react-redux'
import MainPage from './Components/MainPage.jsx'
import store from './store/index.js'
function App() {
    return (
        <Provider store={store}>
            <MainPage />
        </Provider>
    )
}

export default App
