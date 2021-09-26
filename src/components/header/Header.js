import React, { useState } from 'react'
import "./header.css"
import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from "react-icons/md"
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header({sh}) {
const[input,setInput]=useState()
const history=useHistory()
const {user}=useSelector(state=>state.auth)
const handlesubmit=(e)=>{
    e.preventDefault()
   history.push(`/search/${input}`)
}
    return (
        <div className=" header">
            <div className="left">
                <FaBars className="header__menu" size={26} onClick={()=>sh()}/>
                <img
                    src="https://iphone-tricks.de/files/2018/01/youtube-app-logo-min.jpg"
                    className="header__logo"
                />
            </div>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="Search" value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button type="submit">
                    <AiOutlineSearch size={22} className="btn_in"/>
                </button>
            </form>
            <div className="header__icon">
                <MdNotifications size={28} className="fltu" />
                <MdApps size={28} className="fltu"/>
                <img 
                    src={user?.photourl}
                    alt="avatar" />

            </div>
        </div>
    )
}

export default Header


