// newsfeed
import "./Feed.css";

import Post from "../post/Post";
import Share from "../share/Share";

import { useState } from "react";
import { useEffect } from "react";
import StoryReel from "../story-reel/StoryReel";

export default function Feed({ fullName }) {
  const [renderFeed, setRenderFeed] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect (() => {
    fetch("http://10.100.104.45:8000/status/post", {
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
  }, [renderFeed]);

  return (
    <div className="feed">
      <StoryReel fullName={ fullName } />
      <Share renderFeed={ renderFeed } setRenderFeed={ setRenderFeed } fullName={ fullName }/>
      { 
        posts.map((p) => {
          return <Post key = { p.key } post = { p } />;
        }) 
      }

    </div>
  );
}
