const USER_DATA_LS_KEY = 'user-data'

const putDataToLocalStorage = (data) => localStorage.setItem(USER_DATA_LS_KEY, JSON.stringify(data))
const getDataFromLocalStorage = () => JSON.parse(localStorage.getItem(USER_DATA_LS_KEY))

export const saveUserDataInLS = (username, password) => putDataToLocalStorage({ username, password })

export const isMatchDataInLocalStorage = (inputData) => {
    const storedData = getDataFromLocalStorage()
    if (storedData) {
        const isMatch = storedData.username === inputData.username && storedData.password === inputData.password
        return isMatch
    }
    return false
}
