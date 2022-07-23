// newsfeed
import "./Feed.css";

import Post from "../post/Post";
import Share from "../share/Share";

import { useState } from "react";
import { useEffect } from "react";

export default function Feed() {
  const [renderFeed, setRenderFeed] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect (() => {
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
  }, [renderFeed])

  return (
    <div className="feed">
      <Share renderFeed={ renderFeed } setRenderFeed={ setRenderFeed }/>
      { 
        posts.map((p) => {
          return <Post key = { p.key } post = { p } />;
        }) 
      }

    </div>
  );
}
