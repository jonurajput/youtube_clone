import React,{useEffect, useState} from 'react'
import {Container} from "react-bootstrap"
import "./app.css"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import HomeScreen from './screen/homescreen/HomeScreen'
import LoginScreen from "./screen/loginScreen/LoginScreen"
import {BrowserRouter as Router,Redirect,Route,Switch, useHistory} from "react-router-dom"
import { useSelector } from 'react-redux'
import WatchScreen from './screen/watchscreen/WatchScreen'
import SearchScreen from './screen/searchscreen/SearchScreen'
import Subscription from './screen/subscription/Subscription'
import Channelvideos from './screen/channelvideos/Channelvideos'
const Layout=({children})=>{
    const[sidebar,showsidebar]=useState(true);
    const show=()=>{
        showsidebar(!sidebar)
    }
    return(
        <div>
             <Header sh={show}/>
            <div className="app_container">
                <Sidebar value={sidebar} sh={show}/>
                <Container fluid className="app_main ">
                    {children}
                </Container>
            </div>
        </div>
    )
} 
const Layout2=()=>{return(
    <>
        <Header/>
        <WatchScreen/>
    </>
)}
function App() {
    const {accessToken,loading}=useSelector(state=>state.auth)
    const history=useHistory();
    useEffect(()=>{
        if(!loading && !accessToken){
         history.push("/auth")
        }
    },[accessToken,loading])
    return (
        
    <Switch>
            <Route exact path="/">
                <Layout><HomeScreen/></Layout>
            </Route>
            <Route path="/auth">
                <LoginScreen/>
            </Route>
            <Route path='/search/:query'>
                <Layout><SearchScreen/></Layout>
            </Route>
            <Route path='/watch/:id'>
            
            <Layout2/>
            </Route>

            <Route path='/subscription'>
                <Layout><Subscription/></Layout>
            </Route>

            <Route path='/channelvideos/:channelid'>
                <Layout><Channelvideos/></Layout>
            </Route>

            <Route >
                <Redirect to="/"/>
            </Route>
            </Switch>
    
    )
}

export default App
