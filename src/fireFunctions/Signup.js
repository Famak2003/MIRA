import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

function Signup(email,password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

export default Signup
