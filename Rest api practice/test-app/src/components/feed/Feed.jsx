// newsfeed
import "./Feed.css";

import Post from "../post/Post";
import Share from "../share/Share";

import { useState } from "react";
import { useEffect } from "react";
import StoryReel from "../story-reel/StoryReel";

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
      {/* <form action="/profile" method="post" enctype="multipart/form-data">
        <input type="file" name="avatar" />
        <button type="submit">post story</button>
      </form> */}
      <StoryReel />
      <Share renderFeed={ renderFeed } setRenderFeed={ setRenderFeed }/>
      { 
        posts.map((p) => {
          return <Post key = { p.key } post = { p } />;
        }) 
      }

    </div>
  );
}
