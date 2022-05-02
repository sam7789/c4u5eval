// /orders and /neworder are protected routes
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children }) => {
  const auth = useSelector((store) => store.auth.auth);
  if (auth === false) {
    return <Navigate to="/login" replace={false} />;
  }
  return children;
};
