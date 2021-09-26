import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actionType"


const initialstate={
    accessToken:sessionStorage.getItem("ytc-access-token")?sessionStorage.getItem("ytc-access-token"):null,
    user:sessionStorage.getItem("ytc-user")?JSON.parse(sessionStorage.getItem("ytc-user")):null,
    loading:false
}
export const authreducer=(prevstate=initialstate,action)=>{
    const {type,payload}=action
    switch(type){
        case LOGIN_REQUEST:
            return {
                ...prevstate,
                loading:true,
            }
        case LOGIN_SUCCESS:
            return{
                ...prevstate,
                accessToken:payload,
                loading:false,
            }
        case LOGIN_FAIL:
            return{
                ...prevstate,
                accessToken:null,
                loading:false,
                error:payload,
            }
            case LOAD_PROFILE:
                return{
                    ...prevstate,
                    user:payload,
                }
             case LOG_OUT:
                 return{
                     ...prevstate,
                     accessToken:null,
                     user:null,
                 }   
            default:
                return prevstate
    }
}