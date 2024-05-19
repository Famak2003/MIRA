// import {useDispatch} from "react-redux"

// import { onAuthStateChanged } from "firebase/auth"
// import { auth } from "../firebase"
// import { setUser } from "../redux/slices/authSlice"

// function useAuthStateChange() {
//     const dispatch = useDispatch()
//     const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
//         console.log("Auth", currentuser);
//         dispatch(setUser(currentuser))
//     });

//     return  () => {
//         unsubscribe();
//     }
// }

// export default useAuthStateChange
