import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home-wrap">

      <div className="home-card">

        <h1 className="home-title">Mini Post App</h1>

        <p className="home-sub">
          Upload, manage, and explore your posts with ease
        </p>

        <div className="home-btns">
          <button className="btn-create" onClick={() => navigate("/create-post")}>
            + Create Post
          </button>
          <button className="btn-feed" onClick={() => navigate("/feed")}>
            View Posts →
          </button>
        </div>

        <div className="home-dots">
          <span></span><span></span><span></span>
        </div>

      </div>

    </section>
  );
};

export default Home;