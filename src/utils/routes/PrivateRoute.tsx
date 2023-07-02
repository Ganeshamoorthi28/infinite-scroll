import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectUser } from '../../redux/features/userSlice';

const PrivateRoute = () => {
  const user = useSelector(selectUser)

  return (
    user !== null ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoute
