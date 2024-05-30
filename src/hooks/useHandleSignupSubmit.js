// import {useNavigate} from "react-router-dom"
// // import {useSelector} from "react-redux"
// import Signup from "../fireFunctions/Signup"
// export default async function useHandleSignUpSubmit (value, error, setError) {
//     const nav = useNavigate()
//     // const signUp = useSelector((state)=> state.auth.signUp)
//     console.log(value)
//     setError("")
//     try {
//       await Signup(value.email, value.password)
//       nav("/home/chat-history");
//     } catch (err) {
//       setError(err.message)
//       console.error(error)
//     }
//   }
