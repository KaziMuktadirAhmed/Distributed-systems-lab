// newsfeed
import "./Feed.css";

import Post from "../post/Post";
import Share from "../share/Share";

import { useState } from "react";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    fetch("http://localhost:4000/api/post", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => response.json()).then(
        obj =>{ 
          setPosts(obj);
        }
    );
  };

  return (
    <div className="feed">
      <Share />
      { getPosts() }
      { 
        posts.map((p) => {
          return <Post key = { p.key } post = { p } />;
        }) 
      }

    </div>
  );
}
