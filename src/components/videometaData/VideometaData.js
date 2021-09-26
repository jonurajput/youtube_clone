import React, { useEffect } from 'react'
import "./videometadata.css"
import moment from "moment"
import numeral from "numeral"
import { MdThumbUp, MdThumbDown } from "react-icons/md"
import ShowMoreText from "react-show-more-text"
import { useDispatch, useSelector } from 'react-redux'
import { checkSubscriptionStatus, getChannelDetails } from '../../redux/actions/channelaction'
function VideometaData({video,videoId}) {
   const dispatch=useDispatch()
    const {channel,subscriptionStatus}=useSelector(state=>state.channelDetails)
   console.log(subscriptionStatus)
    
    const sub=channel?.items[0]?.statistics?.subscriberCount
    useEffect(()=>{
        dispatch(getChannelDetails(videoId))
        dispatch(checkSubscriptionStatus(videoId))
    },[dispatch,videoId])
    return (
        <div className="videometadata">
            <div className="videometadata_top m-3">
                <h5 style={{fontWeight:"700",color:"black"}}>{video?.snippet?.localized?.title}</h5>
                <div className="d-flex justify-content-between align-content-center py-1">
                    <span>{numeral(video?.statistics?.viewCount).format("0.a")} Views
                <strong>.</strong>{moment(video?.snippet?.publishedAt).fromNow()}</span>
                
                <div>
                    <span className="mr-3">
                        <MdThumbUp size={26}/>{numeral(video?.statistics?.likeCount).format("0.a")}
                    </span>
                    <span className="mr-3">
                        <MdThumbDown size={26}/>{numeral(video?.statistics?.dislikeCount).format("0.a")}
                    </span>
                </div>
            </div>
            </div>
            <div className="videometadata_channel d-flex justify-content-between align-items-center my-2 py-3">
                <div className="d-flex m-2">
                    <img src={channel?.items[0]?.snippet?.thumbnails?.default?.url}
                        alt=""
                        className="rounded-circle mr-3"
                        style={{width:"40px",height:"40px"}} />
                    <div className="d-flex flex-column">
                        <span style={{color:"black",fontWeight:"700",fontSize:"1.5rem"}}>{video?.snippet?.channelTitle}</span>
                        <span style={{color:"black",fontWeight:"400",fontSize:"1rem"}}>{numeral(sub).format("0.a")} Subscribers</span>
                    </div>
                </div>
                <button className="btn border-0 p-2 m-2">Subscribe</button>
            </div>
            <div className="videometadata_description">
            <ShowMoreText
            lines={2}
            more="SHOW MORE"
            less="SHOW LESS"
            anchorClass="showMoreText"
            expanded={false}
            >
  {video?.snippet?.description}
            </ShowMoreText>
                           </div>
        </div>
    )
}

export default VideometaData
