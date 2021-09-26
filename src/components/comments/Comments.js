import React, { useEffect, useState } from 'react'
import "./comment.css"
import Comment from "../comment/Comment"
import { useDispatch, useSelector } from 'react-redux'
import { getCommentsByVideoId,addCommentsByVideoId } from '../../redux/actions/commentsaction'
function Comments({videoId}) {
 const[text,setText]=useState('');

    const dispatch=useDispatch()
    const{user}=useSelector(state=>state.auth)
    useEffect(()=>{
   dispatch(getCommentsByVideoId(videoId))
    },[dispatch,videoId])

    const comments=useSelector(state=>state.commentList.comments)
    const item=comments?.items
    console.log(item)
    const handleinput=(e)=>{
        e.preventDefault();
        if(text.length===0)return;
        dispatch(addCommentsByVideoId(videoId,text))
        setText('')
    }
    return (
        <div className="comments">
           <p>1234 Comments</p>
           <div className="comment_form d-flex w-100 my-2">
               <img 
               src={user?.photourl}
               alt=""
               className="rounded-circle mr-3"
               style={{height:"50px",width:"50px"}}/>
               <form onSubmit={handleinput} className="d-flex flex-grow-1">
                   <input type="text" classsName="flex-grow-1" placeholder="Write a comment..."
                     value={text} onChange={e=>setText(e.target.value)}
                   />
                <button >Comment</button>
               </form>
           </div>
           <div classsName="comment_list">
               {
                   comments?.items.map((value,i)=>(
                       <Comment comment={value} key={i}/>
                   ))
               }
           </div>
        </div>
    )
}

export default Comments
