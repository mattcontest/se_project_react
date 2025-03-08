// import { useContext } from "react";
import "./ProtectedRoute.css";
import { Navigate } from "react-router-dom";

// import CurrentUserContext from "../../contexts/CurrentUserContext";

function ProtectedRoute({ isLoggedIn, children }) {
  //   const location = useLocation();
  //   const from = location.state?.from || "/";
  //   const { isLoggedIn } = useContext(CurrentUserContext);
  //   if (!checkingAuth === null) {
  // return null;
  //   }

  if (!isLoggedIn) {
    return <Navigate to="/" replace={false} />;
  }

  return children;
}

export default ProtectedRoute;
