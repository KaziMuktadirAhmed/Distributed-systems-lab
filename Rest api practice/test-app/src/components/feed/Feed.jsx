// newsfeed
import "./Feed.css";

import Post from "../post/Post";
import Share from "../share/Share";

import { Posts } from "../../dummyData";

export default function Feed() {
  // const srcList = [
  //   "https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-1520x800.jpeg",
  //   "https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-1520x800.jpeg",
  // ];



  return (
    <div className="feed">
      <Share />
      { 
        Posts.map((p) => {
          return <Post key = { p.key } post = { p } />;
        }) 
      }

    </div>
  );
}
