import {HOME_VIDEO_REQUEST, HOME_VIDEO_SUCCESS,HOME_VIDEO_FAIL,SELECTED_VIDEOS_REQUEST,SELECTED_VIDEOS_SUCCESS,SELECTED_VIDEOS_FAIL, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS, RELATED_VIDEO_FAIL,SEARCHED_VIDEO_REQUEST, SEARCHED_VIDEO_SUCCESS, SEARCHED_VIDEO_FAIL, SUBSCRIPTION_CHANNEL_REQUEST, SUBSCRIPTION_CHANNEL_FAIL, SUBSCRIPTION_CHANNEL_SUCCESS, CHANNEL_VIDEO_FAIL, CHANNEL_VIDEO_REQUEST, CHANNEL_VIDEO_SUCCESS} from "../actionType"
import request from "../../api"
export const getpopularvideos=()=>
    async (dispatch,getState)=>{
        try{
            dispatch({
                type:HOME_VIDEO_REQUEST,
            })
           const {data}=await request('/videos',{
                params:{
                    part:"snippet,contentDetails,statistics",
                    chart:"mostPopular",
                    regionCode:"IN",
                    maxResults:20,
                    pageToken:getState().homevideos.nextPageToken,
                },
            })
            console.log(data)
          dispatch({
              type:HOME_VIDEO_SUCCESS,
              payload:{
                  videos:data.items,
                  nextPageToken:data.nextPageToken,
                  category:"all",
              },
          })
        }catch(error){
            console.log(error.message)
            dispatch({
                type:HOME_VIDEO_FAIL,
                payload:error.message,
            })
        }
    
}
export const getvideosBycategories=(keyword)=>

    async (dispatch,getState)=>{
        try{
            dispatch({
                type:HOME_VIDEO_REQUEST,
            })
           const {data}=await request('/search',{
                params:{
                    part:"snippet",
                    maxResults:20,
                    pageToken:getState().homevideos.nextPageToken,
                    q:keyword,
                    type:'video'
                },
            })
            console.log(data)
            
          dispatch({
              type:HOME_VIDEO_SUCCESS,
              payload:{
                  videos:data.items,
                  nextPageToken:data.nextPageToken,
                  category:keyword,
              },
          })
        }catch(error){
            console.log(error.message)
            dispatch({
                type:HOME_VIDEO_FAIL,
                payload:error.message,
            })
        }
    
}

export const getVideosById=(id)=>async dispatch=>{
    try{
          dispatch({
              type:SELECTED_VIDEOS_REQUEST,
          })
          const {data}=await request("/videos",{
              params:{
                  part:"snippet,statistics",
                  id:id
              },
          })
          
           dispatch({
               type:SELECTED_VIDEOS_SUCCESS,
               payload:data.items[0]
           })
    }
    catch(error){
        console.log(error.message)
        dispatch({
            type:SELECTED_VIDEOS_FAIL,
            payload:error.message
        })
    }
}

export const getrelatedVideos=(id)=>async dispatch=>{
    try{
          dispatch({
              type:RELATED_VIDEO_REQUEST,
          })
          const {data}=await request("/search",{
              params:{
                  part:"snippet",
                  relatedToVideoId:id,
                  maxResults:40,
                  type:'video',
                  
              },
          })
          
           dispatch({
               type:RELATED_VIDEO_SUCCESS,
               payload:data.items
           })
    }
    catch(error){
        console.log(error.message)
        dispatch({
            type:RELATED_VIDEO_FAIL,
            payload:error.response.data.message
        })
    }
}

export const getvideosBySearch=(keyword)=>

    async dispatch=>{
        try{
            dispatch({
                type:SEARCHED_VIDEO_REQUEST,
            })
           const {data}=await request('/search',{
                params:{
                    part:"snippet",
                    maxResults:20,
                    q:keyword,
                    type:'video',
                    
                },
            })
            console.log(data)
            
          dispatch({
              type:SEARCHED_VIDEO_SUCCESS,
              payload:data,
        
          })
        }catch(error){
            console.log(error.message)
            dispatch({
                type:SEARCHED_VIDEO_FAIL,
                payload:error.message,
            })
        }
    
}

export const getChannel=()=>async (dispatch,getState)=>{
    try{
        dispatch({
            type:SUBSCRIPTION_CHANNEL_REQUEST,
        })
        const {data}=await request('/subscriptions',{
            params:{
                part:'snippet,contentDetails',
                mine:true,
                maxResults:20
            },
            headers:{
                Authorization:`Bearer ${getState().auth.accessToken}`,
            },
        })
        
console.log(data)
        dispatch({
            type:SUBSCRIPTION_CHANNEL_SUCCESS,
            payload:data.items
        })
    }
    catch(error){
      dispatch({
          type:SUBSCRIPTION_CHANNEL_FAIL,
          payload:error.message
      })
    }
}

export const getChannelvideos=(id)=>async (dispatch)=>{
    try{
        dispatch({
            type:CHANNEL_VIDEO_REQUEST,
        })
        //GET UPLOAD PLAYLIST
        const {data}=await request('/channels',{
            params:{
                part:'contentDetails',
                id:id
            },
          
        })
        
const uploadPlaylistId=data.items[0].contentDetails.relatedPlaylists.uploads
      console.log(uploadPlaylistId)
      
      //get the data
      const res=await request('/playlistItems',{
        params:{
            part:'contentDetails,snippet',
            playlistId:uploadPlaylistId,
            maxResults:20
        },
      
    })
    console.log(res.data.items)
    dispatch({
        type:CHANNEL_VIDEO_SUCCESS,
        payload:res.data.items,
    })
    }
    catch(error){
      dispatch({
          type:CHANNEL_VIDEO_FAIL,
          payload:error.message
      })
    }
}