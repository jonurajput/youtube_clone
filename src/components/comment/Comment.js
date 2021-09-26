import moment from 'moment'
import React from 'react'
import "./comment.css"
function Comment({comment}) {
   
    return (
        <div className="comments p-2 d-flex">
            <img 
               src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
               alt=""
               className="rounded-circle mr-3"
               style={{height:"50px",width:"50px"}}/>
               <div className="comment_body">
                   <p className="comment_header mb-0">
                   {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}   
                     * {moment(comment?.snippet?.topLevelComment?.snippet?.publishedAt).fromNow()}
                   </p>
                   <p className="mb-0">{comment?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
               </div>
        </div>
    )
}

export default Comment
