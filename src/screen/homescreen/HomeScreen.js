import React, { useEffect } from 'react'
import { Container, Col,Row } from "react-bootstrap"
import Video from "../../components/video/Video"
import Categories from "../../components/categories/Categories"
import { useDispatch, useSelector } from 'react-redux'
import { getpopularvideos, getvideosBycategories } from '../../redux/actions/videoaction'
import InfiniteScroll from "react-infinite-scroll-component"

import SkeletonVideo from '../../components/skeleton/SkeletonVideo'
function HomeScreen() {
    const dispatch = useDispatch()
    const { videos, activeCategory, loading } = useSelector(state => state.homevideos)

    const fetchData = () => {
        if (activeCategory === "All")
            dispatch(getpopularvideos())
        else {
            dispatch(getvideosBycategories(activeCategory))
        }
    }
    useEffect(() => {
        dispatch(getpopularvideos())
    }, [dispatch])

    return (
        <div>
        
            <Container>
            <Categories />

                <InfiniteScroll
                    dataLength={videos.length}
                    next={fetchData}
                    hasMore={true}
                Loader={
                        <div className="spinner-border text-danger d-block mx-auto"></div>
                    }
                    className="row">

             {!loading ?(
              videos.map((video) => (
                            <Col lg={3} md={4}>
                                <Video video={video} key={video.id} />
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

export default HomeScreen;
