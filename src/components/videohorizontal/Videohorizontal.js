import React, { useState ,useEffect} from 'react'
import {AiFillEye} from "react-icons/ai"
import request from "../../api"
import moment from "moment"
import numeral from "numeral"
import {LazyLoadImage} from "react-lazy-load-image-component"
import "./videohorizontal.css"
import { useHistory } from 'react-router-dom'

function Videohorizontal({vid}) {
    const[views,setViews]=useState(null);
    const[duration,setDuration]=useState(null);

    const seconds=moment.duration(duration).asSeconds()
const durations=moment.utc(seconds*1000).format("mm:ss")

const videosId=vid?.id?.videoId
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
const history=useHistory()
const handleinput=()=>{
    history.push(`/watch/${videosId}`)
}
    return (
        <div className="videohorizontal" onClick={handleinput}>
            <div className="videohorizontal_left">
                <LazyLoadImage
                src={vid?.snippet?.thumbnails?.medium?.url}
                effect="blur"
                />
                <span style={{position:"absolute",right:"10px",bottom:"10px",color:"white"}}>
                    {durations}
                </span>
            </div>
            <div className="right">
                <p >{vid?.snippet?.title}</p>
                
                    <span className="first_span"><AiFillEye/> {numeral(views).format("0.a")} <strong>.</strong>{moment(vid?.snippet?.publishedAt).fromNow()}</span>
                    <span className="second_span">{vid?.snippet?.channelTitle}</span>
    
                
            </div>
        </div>
    )
}

export default Videohorizontal
