// newsfeed

import "./Feed.css";

export default function Feed() {
  const srcList = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLF833pICl9Nz20GzWFNcdvMxXR6PrcZpFUqRPx-Qi5eioYlDqU0mLQmse5vBzZe2JSB0&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLF833pICl9Nz20GzWFNcdvMxXR6PrcZpFUqRPx-Qi5eioYlDqU0mLQmse5vBzZe2JSB0&usqp=CAU",
  ];



  return (
    <div className="feed">
      {srcList.map((src) => {
        return <img src={src} width="200px" height="300px" alt="wraith waifu" style={{
          margin: '20px'
        }}/>;
      })}
      
    </div>
  );
}
