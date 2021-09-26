import React ,{useState}from 'react'
import { useDispatch } from 'react-redux'
import { getpopularvideos, getvideosBycategories } from '../../redux/actions/videoaction'
import "./categories.css"
const keywords=[
    'All','React js','Angular js','React Native','use of API','Redux','Music','Algorithm art','Guitar',
    'Coding','Cricket','Football','Real Madrid','Poor Coder','Gatsby'
]
function Categories() {
    const[active,setActive]=useState('All')
    const dispatch=useDispatch()
    const handleclick=(value)=>{
        setActive(value)
        if(value==="All"){
            dispatch(getpopularvideos())
        }
        else{
            dispatch(getvideosBycategories(value))
        }
    
    }
    return (
        <div className="categoriesBar">
            {
                keywords.map((value,i)=><span onClick={()=>handleclick(value)} key={i}
                 className={active === value? 'active':''}>{value}</span>)
            }
        </div>
    )
}

export default Categories
