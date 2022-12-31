import React from 'react'
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import Widget from '../../components/widget/Widget';
import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
      <>
        <SideBar />
        <div className="homeContainer">
            <Navbar />
            <div className="widget">
              <Widget type="students"/>
              <Widget type="House Owner"/>
              <Widget type="order"/>
              <Widget  type ="earnings"/>
            </div>
            <div className="charts">
              <Featured/>
              <Chart title="Last 6 months (Revenue)" aspect = {2/1}/>
            </div>
            

            
        </div>
        </>
    </div>
  )
}

export default Home