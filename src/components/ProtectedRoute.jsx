import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = () => {
  const {loggedInUserInfo} = useSelector(state=>state.auth);
  const user = loggedInUserInfo && loggedInUserInfo.token;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
