import './Post.css'

export default function Post() {
  return (
    <div className='post'>
        Post
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopRight">
                    <img src="" alt="" className="postProfileImg" />
                    <span className="postProfileName"></span>
                    <span className="postDate"></span>
                </div>
                <div className="postTopLeft">

                </div>
            </div>
            <div className="postCenter"></div>
            <div className="postBottom"></div>
        </div>
    </div>
  )
}
