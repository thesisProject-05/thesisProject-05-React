import { DriveFolderUploadOutlined } from '@mui/icons-material';
import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import "./new.scss";
const New = () => {
  return (
    <div className='new'>
      <SideBar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add New Student</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
            src="/assets/person/DefaultProfile.jpg"
            alt=""
            className='image'/>
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor='file'>
                  Image:<DriveFolderUploadOutlined className='icon'/>
                </label>
                <input type="file" id="file" style={{ display:"none" }}/>
              </div>

              <div className="formInput">
                <label >userName </label>
                <input type="text" id='name' placeholder='enter your username ...'/>
              </div>
              <div className="formInput">
                <label >Full Name </label>
                <input type="text" id='name' placeholder='enter your name ...'/>
              </div>
              <div className="formInput">
                <label >Email </label>
                <input type="text" id='email' placeholder='name@example.com'/>
              </div>
              <div className="formInput">
                <label >Phone </label>
                <input type="text" id='phone' placeholder='+216-54223234'/>
              </div>
              <div className="formInput">
                <label >Address </label>
                <input 
                type="text" id='address' 
                placeholder='enter your Address ...'/>
              </div>
              <div className="formInput">
                <label >Password </label>
                <input 
                type="password" id='password' 
                placeholder='enter your Password '/>
              </div>
              <div className="formInput">
                <label >Country </label>
                <input type="text" id='Country' placeholder='Tunisia'/>
                <button type='submit'>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New