// The authService is a fetch/axios call to the backend
import axios from 'axios'

// Put:  "proxy": "http://localhost:5000", in the frontend package.json, when in dev, so it will get backend url
const API_URL = '/api/users'

// Register user
const register = async (userData) => {
    // Same thing as in postman, passing data to backend
    const response = await axios.post(API_URL, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Logout user
const logout = () => localStorage.removeItem('user')

const authService = {
    register,
    logout
}

export default authService