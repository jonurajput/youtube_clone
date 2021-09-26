import React, { useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SkeletonVideo from '../../components/skeleton/SkeletonVideo'
import Channelwithvideos from "../../components/chaneelwithvideos/Channelwithvideos"
import Video from '../../components/video/Video'
import { getChannelDetails } from '../../redux/actions/channelaction'
import { getChannelvideos } from '../../redux/actions/videoaction'
import "./channelvideos.css"
function Channelvideos() {
    const {channelid}=useParams()
    const dispatch=useDispatch()
    const {loading,channelvideo}=useSelector(state=>state.channelvideos)
    const {channel}=useSelector(state=>state.channelDetails)
    console.log(channel?.items)

    useEffect(()=>{
        dispatch(getChannelvideos(channelid))
        dispatch(getChannelDetails(channelid))
    },[dispatch])
    return (
        <div>
                <Container>

        <Channelwithvideos detail={channel}/>
                <InfiniteScroll
                    dataLength={40}
                    hasMore={true}
                Loader={
                        <div className="spinner-border text-danger d-block mx-auto"></div>
                    }
                    className="row">

             {!loading ?(
                channelvideo.map((video,i) => (
                            <Col lg={3} md={4}>
                                <Video video={video} id={i} />
                            </Col>)))
                            :[...Array(20)].map(()=>(
                                <Col lg={3} md={4}>
                                    <SkeletonVideo/>
                                </Col>
                            ))}
                </InfiniteScroll> 
    
            </Container>
        </div>
    )
}

export default Channelvideos
