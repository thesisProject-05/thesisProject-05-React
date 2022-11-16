import React from 'react'
import "./sidebar.scss";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
            <span className='logo'>Ekrey Dark</span>
            </Link>
        </div>
        <hr />
        <div className="bottom">

            <ul>
                <p className='title'> MAIN</p>
                <Link to="/" style={{ textDecoration: "none" }}>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>

                </li>
                </Link>
                
                <p className='title'> LISTS</p>
                <Link to="/students" style={{ textDecoration: "none" }}>
                <li>
                    <Person3OutlinedIcon className='icon'/>
                    <span>Students</span>

                </li>
                </Link>

                <Link to="/houseOwner" style={{ textDecoration: "none" }}>
                <li>
                <Person3OutlinedIcon className='icon'/>
                    <span>House Owner</span>
                </li>
                </Link>

                <Link to="/University" style={{ textDecoration: "none" }}>
                <li>
                <SchoolOutlinedIcon className='icon'/>
                    <span>University</span>
                </li>
                </Link>
                <p className='title'> CHARTS</p>
                <li>

                    <InsertChartOutlinedOutlinedIcon className='icon'/>
                    <span>State</span>

                </li>
                <li>
                    <NotificationsActiveOutlinedIcon className='icon'/>
                    <span>Notifications</span>

                </li>
                <p className='title'> SERVICE</p>
                
                <li>
                    <SettingsOutlinedIcon className='icon'/>
                    <span>Settings</span>

                </li>
                <p className='title'> USER INTERFACE</p>
                <li>
                    <ManageAccountsOutlinedIcon className='icon'/>
                    <span>Profile</span>

                </li>
                <li>
                    <CalendarMonthOutlinedIcon className='icon'/>
                    <span>Calendar</span>

                </li>
                <li>
                    <DiamondOutlinedIcon  className='icon'/>
                    <span>Helper</span>

                </li>
                <Link to="/login" style={{ textDecoration: "none" }}>
                <li>
                    <ExitToAppOutlinedIcon className='icon'/>
                    <span>Logout</span>

                </li>
                </Link>
            </ul>
        </div>

    </div>
  )
}

export default SideBar