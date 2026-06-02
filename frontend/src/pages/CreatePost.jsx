import React from 'react'
import './CreatePost.css'
import axios from "axios"
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

  const navigate = useNavigate()

  const handleFile = (e) => {
    const el = document.getElementById('file-name');
    if (e.target.files && e.target.files[0]) {
      el.textContent = e.target.files[0].name;
    }
  }

const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

try {
    await axios.post("https://mern-feed-backend.onrender.com/create-post", formData)
    e.target.reset()
    document.getElementById('file-name').textContent = ''
    navigate("/feed")        // ← move this BEFORE alert
    alert("Post created successfully!")
} catch (err) {
    console.log(err)
    alert("Error creating post")
}
}

  return (
    <section className='cp-wrap'>
      <div className='cp-card'>

        <h1 className='cp-title'>Create post</h1>

        <form className='cp-form' onSubmit={handleSubmit}>

          <div>
            <label className='cp-label'>Image</label>
            <div className='cp-file-area' onClick={() => document.getElementById('imgInput').click()}>
              <span className='cp-upload-icon'>⬆</span>
              <span><strong>Click to upload</strong> or drag & drop</span>
              <input
                type="file"
                id="imgInput"
                name="image"
                accept="image/*"
                onChange={handleFile}
                style={{ display: "none" }}
              />
            </div>
            <div id='file-name' className='cp-file-name'></div>
          </div>

          <div>
            <label className='cp-label' htmlFor='caption'>Caption</label>
            <textarea
              className='cp-caption'
              id='caption'
              name='caption'
              rows={3}
              placeholder='Write a caption...'
            />
          </div>

          <button className='cp-btn' type='submit'>
            Upload post
          </button>

        </form>
      </div>
    </section>
  )
}

export default CreatePost