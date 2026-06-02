const express = require('express');
const multer = require('multer');
const uploadFile = require("./services/storage.services")
const postModel = require("./models/post.model")
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const upload = multer({storage:multer.memoryStorage()})

app.post("/create-post" , upload.single("image"),async(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    const result = await uploadFile(req.file.buffer);
    const post = await postModel.create({
        image : result.url,
        caption : req.body.caption,
    })
    res.status(201).json({
        message:"Post created succesfully",
        post
    })
})

app.get("/post", async (req,res) =>{
    const post = await postModel.find();

    res.status(201).json({
        message:"Post fetched succesfully",
        post
        
    })
})

app.delete("/post/:id" , async(req, res)=>{
        const id = req.params.id;
        await postModel.findOneAndDelete({
            _id : id
        })
        res.status(201).json({
            message:"Delete Sucessfully"
        })
})


module.exports = app;