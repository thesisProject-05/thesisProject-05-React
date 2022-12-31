import React, { useContext } from "react";
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
const Navbar = () => {
  
  return (
    <div className='navbar'>
      <div className="navbarContainer">
        <div className="search">
          <input type="text" placeholder='search'/>
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
         
         
          
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
