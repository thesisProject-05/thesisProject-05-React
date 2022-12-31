import React from 'react'
import DataStudentsTable from '../../components/dataStudentsTable/DataStudentsTable';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import "./students.scss";

const Students = () => {
  return (
  <div className='students'>
      <SideBar/>
      <div className="studentsContainer">
      <Navbar/>
      <DataStudentsTable/>
    </div>
    </div>
  )
    
  
}

export default Students