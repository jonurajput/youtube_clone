import { CHANNEL_DETAIL_FAIL, CHANNEL_DETAIL_REQUEST, CHANNEL_DETAIL_SUCCESS, SET_SUBSCRIPTIOJN_STATUS } from "../actionType"

export const channeldetailreducer=(state={
    loading:true,
    channel:null,
    subscriptionStatus:false,
},action)=>{
    const {type,payload}=action
    switch(type){
        case CHANNEL_DETAIL_REQUEST:
            return{
                ...state,loading:true
            }
        case CHANNEL_DETAIL_SUCCESS:
            return{
                ...state,
                channel:payload,
                loading:false,
            }  
         case CHANNEL_DETAIL_FAIL:
             return{
                 ...state,
                 channel:null,
                 loading:false,
                 error:payload,
             } 
             case SET_SUBSCRIPTIOJN_STATUS:
                 return{
                     ...state,subscriptionStatus:payload
                 }    
         default:
             return state   
    }
}