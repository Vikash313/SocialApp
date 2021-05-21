import React  from 'react'
import {useSelector} from "react-redux"
import thumbs from "../images/thumbs-up.svg"
import message from "../images/message-circle.svg"
import closeIcon from "../images/CloseIcon.svg"
import * as apiService from "../service/api"
import "../style.css"

const Card = (props) => {
    const {likeCount, setLikeCount } = props
    const dataList = useSelector((state) => state)
    

    const handleLikeCount = async (data, val) => {
        setLikeCount(likeCount + 1)
        let bodyData = {likeCount:val}
        //UDATE API CALL
        let response = await apiService.updateData(data, bodyData)
        console.log("updatedResponse",response.data)
    }


    //Remove Post and delete Api hitted
    const handleRemovePost = async (id) => {
        let bodyData = {status:false}
        let response = await apiService.removeCard(id, bodyData)
    }

    console.log("dataList",dataList.postReducer.list)
    
    return (
        <div style={{display:"flex", marginLeft:"10px", marginRight: "10px"}}>
        { dataList && dataList.postReducer.list.map((val, index) => 
            <div className="card border-primary mb-3" style={{width: "18rem"}} key={index}>
                <img src={val.image} className="card-img-top" alt='image1' />
                    <div className="card-body">
                        <h5 className="card-title">{val.name}</h5>
                        <p className="card-text"><img src={message} alt="message" style={{width: "2rem"}} />{val.comment}</p>  
                    </div>
                  <div style={{display:"flex"}}>
                  <img src={closeIcon} className="close-post" alt="closeIcon" style={{ marginLeft:"10px", width: "1rem", cursor:"pointer" }} onClick={() => handleRemovePost(val._id)} />
                  <div className="card-align" style={{display:"flex", justifyContent:"center", marginLeft:"80px"}}>
                <img src={thumbs} alt="thumbs" style={{width: "2rem", cursor:"pointer"}} id={val._id} onClick={() => handleLikeCount(val._id, likeCount)} />
                 <span style={{fontSize:"x-large"}} >{val.likeCount}</span>
                </div>
                </div>
            </div>
            )}
        
        </div>
    )
}

export default Card
