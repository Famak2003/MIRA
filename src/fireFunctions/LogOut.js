import { signOut } from "firebase/auth"
import { auth } from "../firebase"

function LogOut() {
    return signOut(auth)
    
}

export default LogOut
