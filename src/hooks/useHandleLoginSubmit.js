// import {useNavigate} from "react-router-dom"
// // import {useSelector} from "react-redux"
// import Login from "../fireFunctions/Login"
// export default async function useHandleLoginSubmit (value, error, setError) {
//     const nav = useNavigate()
//     // const login = useSelector((state)=> state.auth.login)
//     console.log(value)
//     setError("")
//     try {
//       await Login(value.email, value.password)
//       nav("/home/chat-history");
//     } catch (err){
//       setError(err.message)
//       console.error(error)
//     }
//   }