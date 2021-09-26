import React, { useEffect } from 'react'
import "./login.css"
import {useDispatch, useSelector} from "react-redux"
import {login} from "../../redux/actions/authaction"
import { useHistory } from 'react-router-dom'
function LoginScreen() {
    const dispatch=useDispatch()
    const accesstoken=useSelector(state=>state.auth.accessToken)
    const history=useHistory()
    console.log(accesstoken)
    const handlelogin=()=>{
       dispatch(login())
    }
    
    useEffect(()=>{
        if(accesstoken){
              history.push('/');
        }
    },[accesstoken,history])
    return (
        <div className="login">
            <h1>Youtube clone</h1>
            <img src="https://iphone-tricks.de/files/2018/01/youtube-app-logo-min.jpg"/>
            <button onClick={handlelogin}>Login with Google</button>
            
        </div>
    )
}

export default LoginScreen
