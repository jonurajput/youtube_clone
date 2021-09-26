import React, { useEffect, useState } from 'react'
import "./video.css"
import {AiFillEye} from "react-icons/ai"
import request from "../../api"
import moment from "moment"
import numeral from "numeral"
import {LazyLoadImage} from "react-lazy-load-image-component"
import { useHistory } from 'react-router-dom'
function Video({video}) {
    const[views,setViews]=useState(null);
    const[duration,setDuration]=useState(null);
    const[channelIcon,getChannelIcon]=useState(null)
    
    const {id,snippet:{channelId,channelTitle,title,publishedAt,thumbnails:{medium},},contentDetails}=video

const seconds=moment.duration(duration).asSeconds()
const durations=moment.utc(seconds*1000).format("mm:ss")

    const videosId=id?.videoId||contentDetails?.videoId||id;

    const history=useHistory();
    useEffect(()=>{
        const get_video_details=async()=>{
           const {data:{items}}= await request('/videos',
           {
                params:{part:'contentDetails,statistics',
                 id:videosId,
            },
                
            })
            
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        get_video_details()
    },[videosId])

    useEffect(()=>{
       const get_channel_icon=async ()=>{
           const {data:{items}}=await request('/channels',{
               params:{part:"snippet",
            id:channelId,
        }
           })
           getChannelIcon(items[0].snippet.thumbnails.default)
       }
       get_channel_icon()
    },[channelId])

    const handlevideoclick=()=>{
        history.push(`/watch/${videosId}`)
    }
    return (
        <div className="video" onClick={handlevideoclick}>
            <div className="video_top">
                
                <LazyLoadImage src={medium.url} effect="blur"/>
                <span className="video_top_duration">{durations}</span>
            </div>
            <div className="video_title">
             {title}
            </div>
            <div className="video_details">
                <span><AiFillEye/> {numeral(views).format("0.a")}</span>
                <span><strong>.</strong>{moment(publishedAt).fromNow()}</span>
            </div>
            <div className="video_channel">
            
                <LazyLoadImage src={channelIcon?.url} effect="blur"/>
                <p>{channelTitle}</p>
            </div>
            
        </div>
    )
}

export default Video
