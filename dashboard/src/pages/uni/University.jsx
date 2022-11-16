import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import SideBar from '../../components/sidebar/SideBar'
import "./university.scss"

const University = () => {
  return (
    <div className='university'>
    <SideBar />
    <div className="universityContainer">
    <Navbar />
    </div>
    </div>
  )
}

export default University
