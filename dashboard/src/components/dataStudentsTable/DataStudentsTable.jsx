import axios from "axios";
import React,{useState,useEffect} from 'react'
import "./DataStudentsTable.scss"
import { DataGrid} from '@mui/x-data-grid';
import { Link } from "react-router-dom";


const DataStudentsTable = () => {
  const[data ,setData] = useState([]);
  
  useEffect(()=>{
    axios.get(`http://127.0.0.1:3001/student/`)
    .then((res)=>{
      console.log(res.data[0].idstudents);
     setData(res.data);
    })
    //id()
 },[])
 console.log(data);
 const id =()=>{

  data.length ? data.map((ele)=>{
    console.log(ele.idstudents,'pppp');

  }):console.log('still waiting');
 }
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
             <Link to="/students/studentsId" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
              </Link>
            {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
              >Delete
              
            </div> */}
          </div>
        );
      },
    },
  ];

  return (
    <div className='datastudenttable'>
      <div className="dataStudentTableTitle">
        <span>Add New Student</span>
        <Link to="/students/:studentsId/new" style={{ textDecoration: "none" }}>
        <span className="link">Add New</span>
        </Link>
      </div>
      <DataGrid
      className='datagrid'
      getRowId={data[0].idstudents}
        rows={data}
        columns={data.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    
    </div>
  )
}

export default DataStudentsTable
