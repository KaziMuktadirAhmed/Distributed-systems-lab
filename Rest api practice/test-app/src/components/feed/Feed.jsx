// newsfeed

import Share from "../share/Share";
import "./Feed.css";

export default function Feed() {
  // const srcList = [
  //   "https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-1520x800.jpeg",
  //   "https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-1520x800.jpeg",
  // ];



  return (
    <div className="feed">
      <Share />
      {/* {srcList.map((src) => {
        return <img src={src} width="650px" height="500px" alt="wraith waifu" style={{
          margin: '20px'
        }}/>;
      })} */}

    </div>
  );
}
