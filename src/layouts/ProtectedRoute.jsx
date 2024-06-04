import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute() {
  const nav = Navigate();
  const userState = useSelector((state) => state.auth.userLogin);
  return userState ? (
    nav("/home/chat-history")
  ) : (
    <Navigate to={"/auth/login"} replace={true} />
  );
}

export default ProtectedRoute;
