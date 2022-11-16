import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import "./single.scss";
const Single = () => {
  return (
    <div className="single">
      <SideBar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <span className="editButton">Edit</span>

            <div className="item">
              <img src="/assets/person.jpg" alt="" className="itemImg" />

              <div className="details">
                <h1 className="itemTitle">asma mohammed</h1>
                <div className="detailItem">
                  <span className="itemkey">Email: </span>
                  <span className="itemValue">gogirlasma@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Phone: </span>
                  <span className="itemValue">+4 123-234-45</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Address: </span>
                  <span className="itemValue">ibn kholdon</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Country: </span>
                  <span className="itemValue">tunisia</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
       
      </div>
    </div>
  );
}

export default Single