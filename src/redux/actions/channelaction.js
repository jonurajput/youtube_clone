import { CHANNEL_DETAIL_REQUEST, CHANNEL_DETAIL_SUCCESS, CHANNEL_DETAIL_FAIL, SET_SUBSCRIPTIOJN_STATUS } from "../actionType"
import request from "../../api"
export const getChannelDetails = id => async dispatch => {
    try {
        dispatch({
            type: CHANNEL_DETAIL_REQUEST
        })
        const { data } = await request('/channels', {
            params: {
                part: "snippet,statistics,contentDetails",
                id,
            }
        })

        dispatch({
            type: CHANNEL_DETAIL_SUCCESS,
            payload: data,
        })
    }
    catch (error) {
        console.log(error.message)
        dispatch({
            type: CHANNEL_DETAIL_FAIL,
            payload: error.message,
        })
    }
}

export const checkSubscriptionStatus = (id) => async (dispatch, getState) => {
    try {

        const data = await request('/subscriptions', {
            params: {
                part: 'snippet',
                forChannelId: id,
                mine: true,
            },
            headers: {
                Authorization: `Bearer ${getState().auth.accessToken}`,
            },
        })
        console.log(data)
        dispatch({
            type: SET_SUBSCRIPTIOJN_STATUS,

        })
    }
    catch (error) {
        console.log(error.message)

    }
}