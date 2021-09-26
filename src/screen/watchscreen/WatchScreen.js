import React,{useEffect, useState} from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Comments from '../../components/comments/Comments'
import Videohorizontal from '../../components/videohorizontal/Videohorizontal'
import VideometaData from '../../components/videometaData/VideometaData'
import { getrelatedVideos, getVideosById } from '../../redux/actions/videoaction'
import "./watchscreen.css"

function WatchScreen() {
    const dispatch=useDispatch()

    const[size,setSize]=useState(window.innerWidth)
    const {id}=useParams()
    useEffect(()=>{
       const handleresize=()=>{
           setSize(window.innerWidth)
       }
       window.addEventListener("resize",handleresize)
       
       return()=>{
           window.removeEventListener("resize",handleresize)
       }
    },[])
    useEffect(()=>{
     dispatch(getVideosById(id))
     dispatch(getrelatedVideos(id))
    },[dispatch,id])

    
    const {videos,loading}=useSelector(state=>state.selectedVideo)
    const {loading:relatedloading,relatedvideos}=useSelector(state=>state.relatedVideo)
    return (
    
        <div className="content">
            <div className="content1">
            <iframe src={`https://www.youtube.com/embed/${id}`}
                    frameBorder="0"
                    title={videos?.snippet?.title}
                    allowFullScreen
                    width="100%"
                    height="100%"></iframe>
                    
            </div>
            <div className="content2">
            <VideometaData video={videos} videoId={videos?.snippet?.channelId}/>
            </div>
            <div className={size<=905?"extraclass":"content3"}>
               
            {!relatedloading?
                    relatedvideos?.filter(i=>i.snippet).map((value,i) => (
                        <Videohorizontal vid={value} key={i}/>
                    ))
                   :
                   <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                   <Skeleton width="100%" height="120px" count={15}/> 
                   </SkeletonTheme>
                   
                }
            </div>
            <div className="content4">
                <Comments videoId={id}/>
            </div>
        </div>
            
     )
}

export default WatchScreen;
