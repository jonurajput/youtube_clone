import React from 'react'
import "./sidebar.css"
import {MdHome,MdSubscriptions,MdThumbUp,MdHistory,MdLibraryBooks,MdExitToApp} from "react-icons/md"
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/authaction'
import { NavLink, useHistory } from 'react-router-dom'
function Sidebar({value,sh}) {
    const dispatch=useDispatch()
    const history=useHistory();
    const logouthandler=()=>{
        dispatch(logout())
    }
    return (
        <div className={value?"sidebar":"newsidebar"} >
          <li className="lisst">
          <h3>Youtube</h3>
            </li>
            <li className="lisst" onClick={()=>history.push("/")}>
                <MdHome/>
                <span>Home</span>
            </li>
            <li className="lisst" onClick={()=>history.push("/subscription")}>
               <MdSubscriptions/>
                <span>Subscription</span>
            </li>
         
         
            <hr />
            <li className="lisst" onClick={logouthandler}>
                <MdExitToApp/>
                <span>Logout</span>
            </li>
            <hr/>
        </div>
    )
}

export default Sidebar
