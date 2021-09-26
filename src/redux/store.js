import {createStore,applyMiddleware,compose,combineReducers} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import {authreducer} from "./reducers/authreducer"
import {channelvideoreducer, homevideoreducer, relatedVideosReducer, searchedVideosReducer, selectedVideosReducer, subscriptionChannelreducer} from "./reducers/videoreducer"
import {channeldetailreducer} from "./reducers/channelreducer"
import {commentlistreducer} from "./reducers/commentsreducer"
const rootreducer=combineReducers({
    auth:authreducer,
    homevideos:homevideoreducer,
    selectedVideo:selectedVideosReducer,
    channelDetails:channeldetailreducer,
    commentList:commentlistreducer,
    relatedVideo:relatedVideosReducer,
    searchedVideo:searchedVideosReducer,
    subscribeChannel:subscriptionChannelreducer,
    channelvideos:channelvideoreducer
})

const store=createStore(rootreducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default store;