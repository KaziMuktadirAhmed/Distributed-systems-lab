import "./Topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"

export default function Topbar() {
  const userImg = "";

  const checkUserImg = () => {
    if (userImg === "")
      return "./assets/defaultImg.png";
  }

  return (
    <div className = "topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Freakbook</span>
      </div>
      <div className="topbarCenter">    
        <div className="searchbar">
          <Search className="searchIcon" />
          <input 
            placeholder="Search for anything" 
            className="searchInput" 
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
          <img src={ checkUserImg() } alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  );
}
