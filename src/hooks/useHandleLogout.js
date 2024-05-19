import { useDispatch } from "react-redux";
import LogOut from "../fireFunctions/LogOut";
import { useNavigate } from "react-router-dom";
import { setUserLogin } from "../redux/slices/authSlice";
import toast from "react-hot-toast";

export const useHandleLogout = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const callLogout = async () => {
    try {
      const response = await LogOut();
      console.log("response from logout", response);
      nav("/");
      dispatch(setUserLogin(false));
      toast.success("Logout Successful see you soon!");
    } catch (error) {
      toast.error("Error while logging out");
      console.log(error.message);
    }
  };
  return callLogout;
};
