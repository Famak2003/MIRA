import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../redux/slices/authSlice";
import GoogleSignIn from "../fireFunctions/GoogleSignIn";
import { useNavigate } from "react-router-dom";

function useGoogleServices() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  return async (e) => {
    e.preventDefault();

    // Show loading toast
    const loadingToast = toast.loading("Signing in...");

    try {
      // Perform Google SignIn
      const response = await GoogleSignIn();
      if (response) {
        // Dismiss loading toast and show success toast
        toast.success(`Login Successful`, { id: loadingToast });

        nav("/home/chat");
        dispatch(setUserLogin(true));
      }
    } catch (error) {
      // Dismiss loading toast and show error toast
      toast.error("Invalid login... try again in a few minutes", {
        id: loadingToast,
      });
      console.log(error.message);
    }
  };
}

export default useGoogleServices;
