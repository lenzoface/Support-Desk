import { Navigate, Outlet } from "react-router-dom"
import {useAuthStatus} from '../hooks/useAuthStatus'
import Spinner from "./Spinner"

const PrivateRoute = () => {
    const {loggedIn, checkingStatus} = useAuthStatus()

    if (checkingStatus) {
        return <Spinner />
    }

    return loggedIn ? <Outlet /> : <Navigate to='/login' />
    // <Outlet /> lets us go to the whatever route we wanted to access, in this case if already logged in 
}

export default PrivateRoute