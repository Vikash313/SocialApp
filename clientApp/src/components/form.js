import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch } from "react-redux"
import {addCard, fetchPost } from "../actions/index"
import Card from "./card"
import * as apiService from "../service/api"

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")
    const [image, setImage] = useState('')
    const [likeCount, setLikeCount] = useState(0)

    let bodyData = {name, email, comment, image, likeCount}

    const list = useSelector((state) => state.postReducer.list)
    console.log("list", list)
    const dispatch = useDispatch()
    

    //FETCH DATA FROM API
    async function getData() {
        const response = await apiService.fetchData()
        dispatch(fetchPost(response.data))
    }



    useEffect(() => {
        getData()
    },[])


    //Data submitted to the API
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(addCard({
            name:name,
            email:email,
            comment:comment,
            image:image,
            likeCount: likeCount
        }))
        const response = await apiService.addData(bodyData)
        console.log("response adding data",response.data);
    }

    console.log("image", image)
    return (
        <>
           <h5>Add Details here to create post..</h5>
            <form style={{width:"50%"}} className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName4" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Comment</label>
                    <input type="text" className="form-control" id="inputComment4" placeholder="Enter any comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Image</label>
                    <input type="file" className="form-control" id="inputImage4" placeholder="Upload image"  onChange={(e) => setImage(e.target.files[0].name)} />
                </div>
            </form>
            <button type="button" style={{display:"flex", marginTop: "10px", marginBottom:"10px"}} className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            <Card setLikeCount={setLikeCount} likeCount={likeCount} />
        </>
    )
}

export default Form

