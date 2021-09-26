import React, { useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useHistory } from 'react-router-dom'

function Channels({detail}) {
    const history=useHistory()
    
console.log( detail?.items[0])
    
    const channeldetail=()=>{
        history.push(`/channelvideos/${detail?.items[0]?.snippet?.resourceId?.channelId}`)
    }
    return (
        <div className="channels" onClick={channeldetail}>
            
            <LazyLoadImage src={detail?.items[0]?.snippet?.thumbnails?.medium?.url}
 effect="blur"/>

 <div className="channel_detail">
     
     <h4>{detail?.items[0]?.statistics?.videoCount} videos</h4>
     <h3>{detail?.items[0]?.snippet?.title}</h3>
 </div>
        </div>

    )
}

export default Channels

