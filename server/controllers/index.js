const express = require("express")
const router = express.Router();
const User = require("../model/userSchema")

router.get('/router', (req, res) => {
    res.send('hello from router')
})


//Add All Data
router.post('/user/add-data', async (req, res) => {
    const post = req.body;
    const newPost = new User(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

//Get All Data
router.get('/user/fetch-data', async (req,res) => {
    try{
        const user = await User.find();
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message})
    }
})

//Get Single Data
router.get('/user/fetch-single-data/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }catch(error){
        res.status(404).json({ message: error.message})
    }
})

//Update Data
router.patch('/user/update-data/:id', async(req,res) => {
    try{ 
        const { id: _id } = req.params;
        const post = req.body;
        const updatedData = await User.findByIdAndUpdate(_id, post, { new: true });
        res.status(200).json(updatedData);
    }catch(error){
        res.status(404).send({message: error.message})
    }
})

//Delete Data
router.delete('/user/delete-data/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const element = await user.remove()
        res.status(200).json(element)
    }catch(error){
        res.status(404).json({message:error.message})
    }
})


module.exports = router