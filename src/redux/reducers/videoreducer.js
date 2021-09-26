import {  HOME_VIDEO_SUCCESS,HOME_VIDEO_REQUEST,HOME_VIDEO_FAIL, SELECTED_VIDEOS_REQUEST, SELECTED_VIDEOS_SUCCESS, SELECTED_VIDEOS_FAIL, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS, RELATED_VIDEO_FAIL, SEARCHED_VIDEO_REQUEST, SEARCHED_VIDEO_SUCCESS, SEARCHED_VIDEO_FAIL, SUBSCRIPTION_CHANNEL_REQUEST, SUBSCRIPTION_CHANNEL_SUCCESS, SUBSCRIPTION_CHANNEL_FAIL, CHANNEL_VIDEO_SUCCESS, CHANNEL_VIDEO_FAIL, CHANNEL_VIDEO_REQUEST } from "../actionType"

export const homevideoreducer=(state={
    videos:[],
    loading:false,
    nextPageToken:null,
    activeCategory:"All",
},action)=>{
    const {type, payload}=action
    switch(type){
        case HOME_VIDEO_SUCCESS:
            return{
                ...state,
                videos:
                state.activeCategory===payload.category?[
                    ...state.videos,...payload.videos]:payload.videos
                ,
                loading:false,
                nextPageToken:payload.nextPageToken,
                activeCategory:payload.category,
            }
         case HOME_VIDEO_FAIL:
             return{
                 ...state,
                 loading:false,
                 error:payload
             }   
          case HOME_VIDEO_REQUEST:
              return{
                ...state,
                loading:true,  
              }   
              default:
                  return state
    }
}

export const selectedVideosReducer=(state={
    loading:true,
    videos:null
},action)=>{
    const {type,payload}=action
    switch(type){
        case SELECTED_VIDEOS_REQUEST:
            return{
                ...state,loading:true
            }
        case SELECTED_VIDEOS_SUCCESS:
            return{
                ...state,
                videos:payload,
                loading:false,
            }  
         case SELECTED_VIDEOS_FAIL:
             return{
                 ...state,
                 videos:null,
                 error:payload,
             }     
         default:
             return state   
    }
}

export const relatedVideosReducer=(state={
    loading:true,
    relatedvideos:[]
},action)=>{
    const {type,payload}=action
    switch(type){
        case RELATED_VIDEO_REQUEST:
            return{
                ...state,loading:true
            }
        case RELATED_VIDEO_SUCCESS:
            return{
                ...state,
                relatedvideos:payload,
                loading:false,
            }  
         case RELATED_VIDEO_FAIL:
             return{
                 ...state,
                 loading:false,
                 error:payload,
             }     
         default:
             return state   
    }
}

export const searchedVideosReducer=(state={
    loading:true,
    videos:[],
    nextpageToken:null,
},action)=>{
    const {type,payload}=action
    
    switch(type){
        case SEARCHED_VIDEO_REQUEST:
            return{
                ...state,loading:true
            }
        case SEARCHED_VIDEO_SUCCESS:
            return{
                ...state,
                videos:payload.items,
                loading:false,
                nextpageToken:payload.nextPageToken
            }  
         case SEARCHED_VIDEO_FAIL:
             return{
                 ...state,
                 loading:false,
                 error:payload,
             }     
         default:
             return state   
    }
}


export const subscriptionChannelreducer=(state={
    loading:true,
    channel:null,
    
},action)=>{
    const {type,payload}=action
    
    switch(type){
        case SUBSCRIPTION_CHANNEL_REQUEST:
            return{
                ...state,loading:true
            }
        case SUBSCRIPTION_CHANNEL_SUCCESS:
            return{
                ...state,
                channel:payload,
                loading:false,
                
            }  
         case SUBSCRIPTION_CHANNEL_FAIL:
             return{
                 ...state,
                 loading:false,
                 error:payload,
             }     
         default:
             return state   
    }
}

export const channelvideoreducer=(state={
    loading:true,
    channelvideo:null,
    
},action)=>{
    const {type,payload}=action
    
    switch(type){
        case CHANNEL_VIDEO_REQUEST:
            return{
                ...state,loading:true
            }
        case CHANNEL_VIDEO_SUCCESS:
            return{
                ...state,
                channelvideo:payload,
                loading:false,
                
            }  
         case CHANNEL_VIDEO_FAIL:
             return{
                 ...state,
                 loading:false,
                 error:payload,
             }     
         default:
             return state   
    }
}


