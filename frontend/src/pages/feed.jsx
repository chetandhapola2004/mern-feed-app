import React, { useState , useEffect} from 'react'
import axios from "axios"
import './Feed.css'

const Feed = () => {

  const [posts, setPosts] = useState([
  ])

useEffect(() => {
    axios.get("http://localhost:3000/post")
        .then((res) => {
            console.log(res.data);
            setPosts(res.data.post) 
        })
}, [])

const handleDelete = async (id) => {
    axios.delete(`http://localhost:3000/post/${id}`)
        .then(() => {
            setPosts(posts.filter(post => post._id !== id))
        })
        .catch((err) => {
            console.log(err)
            alert("Error deleting post")
        })
}

  return (
    <section className="feed-wrap">

      <div className="feed-header">
        <div className="feed-badge">Gallery</div>
        <h1 className="feed-title">Your Feed</h1>
        <p className="feed-sub">{posts.length} post{posts.length !== 1 ? 's' : ''} uploaded</p>
      </div>

      {posts.length > 0 ? (
        <div className="feed-grid">
          {posts.map((post) => (
            <div key={post._id} className="feed-card">
              <div className="feed-img-wrap">
                <img src={post.image} alt="post" className="feed-img" />
                <div className="feed-overlay"></div>
              </div>
              <div className="feed-body">
                <p className="feed-caption">{post.caption}</p>
                <div className="feed-body">
                <button 
              className="feed-delete-btn"
               onClick={() => handleDelete(post._id)}
                >
                 Delete
               </button>
            </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="feed-empty">
          <div className="feed-empty-icon">📭</div>
          <h2 className="feed-empty-text">No posts yet</h2>
          <p className="feed-empty-sub">Create your first post to see it here</p>
        </div>
      )}

    </section>
  )
}

export default Feed