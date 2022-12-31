import React from 'react'
import DataHouseOwnerTable from '../../components/dataHouseOwnerTable/DataHouseOwnerTable';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import "./houseOwner.scss";


const HouseOwner = () => {
  return (
     <div className='houseOwner'>
    <SideBar/>
    <div className="houseOwnerContainer">
    <Navbar/>
    <DataHouseOwnerTable/>
  </div>
  </div>
  )
}

export default HouseOwner