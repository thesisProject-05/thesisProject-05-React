import React, { useContext } from "react";
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Switch from '@mui/material/Switch';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className="navbarContainer">
        <div className="search">
          <input type="text" placeholder='search'/>
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
          <LanguageOutlinedIcon className='icon'/>
          <span>English</span>

          </div>
          <div className="item">
          <Switch  style={{color: "#210876"}} className='icon'
          onClick={() => dispatch({ type: "TOGGLE" })}
             />
          </div>
          <div className="item">
            <FullscreenOutlinedIcon/>
          </div>
          <div className="item">
            <NotificationsActiveOutlinedIcon  className='icon'/>
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon  className='icon'/>
            <div className="counter">5</div>
          </div>
          <div className="item">
            <ListAltOutlinedIcon  className='icon'/>
          </div>
          <div className="item">
            <img src="/assets/team-3.jpeg" alt="" className='profileImg'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
