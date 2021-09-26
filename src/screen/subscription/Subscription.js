import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Channels from '../../components/channels/Channels'
import { getChannel } from '../../redux/actions/videoaction'
import "./subscription.css"
import Skeleton,{SkeletonTheme} from "react-loading-skeleton"
function Subscription() {
    const dispatch=useDispatch()
     const {loading,channel}=useSelector(state=>state.subscribeChannel)
     console.log(channel)
     useEffect(()=>{
        dispatch(getChannel())
            },[dispatch])
    return (
        <div>
{
    (!loading?channel.map((value,i)=>(
        <Channels detail={value} key={i}/>
    )):
    <SkeletonTheme color="#343a40" highlightColor="#3c4147">
    <Skeleton height={110} count={20}/>
    </SkeletonTheme>)
}
        </div>
    )
}

export default Subscription
