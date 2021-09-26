import React, { useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useHistory } from 'react-router-dom'
import "./channels.css"
function Channels({detail}) {
    const history=useHistory()
    

    
    const channeldetail=()=>{
        history.push(`/channelvideos/${detail?.snippet?.resourceId?.channelId}`)
    }
    return (
        <div className="channels" onClick={channeldetail}>
            
            <LazyLoadImage src={detail?.snippet?.thumbnails?.medium?.url}
 effect="blur"/>

 <div className="channel_detail">
     <h5>{detail?.snippet?.description}</h5>
     <h4>{detail?.contentDetails?.totalItemCount} videos</h4>
     <h3>{detail?.snippet?.title}</h3>
 </div>
        </div>
    )
}

export default Channels

