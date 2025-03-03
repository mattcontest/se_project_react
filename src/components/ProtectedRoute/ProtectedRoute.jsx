import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ProtectedRoute({ isLoggedIn, children }) {
  //   const location = useLocation();
  //   const from = location.state?.from || "/";
  //   const { isLoggedIn } = useContext(CurrentUserContext);
  if (!isLoggedIn) {
    return <Navigate to="/" replace={false} />;
  }

  return children;
}

export default ProtectedRoute;
