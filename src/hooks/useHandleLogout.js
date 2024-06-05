import { useDispatch } from "react-redux";
import LogOut from "../fireFunctions/LogOut";
import { useNavigate } from "react-router-dom";
import { setUserLogin } from "../redux/slices/authSlice";
import toast from "react-hot-toast";

export const useHandleLogout = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const callLogout = async () => {
    // Show loading toast
    const loadingToast = toast.loading("Signing out...");
    try {
      const response = await LogOut();
      console.log(response && "see you later🙂");
      nav("/");
      dispatch(setUserLogin(false));
      toast.success(`Signed out successful see you soon!`, {
        id: loadingToast,
      });
    } catch (error) {
      toast.error("Error while logging out", {
        id: loadingToast,
      });
      console.log(error.message);
    }
  };
  return callLogout;
};
