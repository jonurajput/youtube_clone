import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getvideosBySearch } from '../../redux/actions/videoaction'
import { Container, Col,Row } from "react-bootstrap"
import Video from "../../components/video/Video"
import SkeletonVideo from '../../components/skeleton/SkeletonVideo'
function SearchScreen() {
    const {query}=useParams()
    const dispatch=useDispatch()
   
    const {loading,videos}=useSelector(state=>state.searchedVideo)
    
    
    const fetchData=()=>{
        dispatch(getvideosBySearch(query)) 
    }
    useEffect(()=>{
        dispatch(getvideosBySearch(query))
    },[dispatch,query])
    return (
        <div>
                 <Container>
                

                <InfiniteScroll
                    dataLength={videos.length}
                    next={fetchData}
                    hasMore={true}
                Loader={
                        <div className="spinner-border text-danger d-block mx-auto"></div>
                    }
                    className="row">

             {!loading ?(
                videos.map((video,i) => (
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

export default SearchScreen
