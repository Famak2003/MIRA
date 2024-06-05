import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setUserLogin } from "../redux/slices/authSlice";
import { Login, Signup } from "../fireFunctions";

function useHandleAuth() {
  const dispatch = useDispatch();
  const location = useLocation;
  const [error, setError] = useState();

  const nav = useNavigate();

  async function handleAuthAction(action, value) {
    const actionType = action === "login" ? Login : Signup;

    setError("");
    const loadingToast = toast.loading("Signing in...");
    try {
      // Show loading toast
      const response = await actionType(value.email, value.password);

      if (response) {
        // Dismiss loading toast and show success toast
        toast.success(`Login Successful`, { id: loadingToast });
        const destination = location?.state?.destination
          ? location.state.destination
          : "/home/chat";
        nav(destination, { replace: true });
        dispatch(setUserLogin(true));
      }
    } catch (err) {
      toast.error("invalid login... check credentials", { id: loadingToast });
      setError(err.message);
      console.error(error);
    }
  }

  return handleAuthAction;
}

export default useHandleAuth;
