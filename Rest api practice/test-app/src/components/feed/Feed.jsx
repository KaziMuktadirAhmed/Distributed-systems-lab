// newsfeed
import "./Feed.css";

import Post from "../post/Post";
import Share from "../share/Share";


import { useState } from "react";

export default function Feed() {
  // const srcList = [
  //   "https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-1520x800.jpeg",
  //   "https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-1520x800.jpeg",
  // ];
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
          console.log(obj);
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
