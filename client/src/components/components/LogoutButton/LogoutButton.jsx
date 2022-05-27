
 import React, {useContext, useReducer} from "react"
import AuthContext from "../../../context/Authentication/authenticationContext"
import "./LogoutButton.styles.css"
const LogoutButton = (props) => {
    const authContext = useContext(AuthContext)
    const {logout} = authContext
    return(
        <button onClick={logout}    >
            Sign Out
        </button>
  )
}
export default LogoutButton