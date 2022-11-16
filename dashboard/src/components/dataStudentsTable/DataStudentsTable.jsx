import React,{useState} from 'react'
import "./DataStudentsTable.scss"
import { DataGrid} from '@mui/x-data-grid';
import { studentsColumns,studentsRows } from '../../dataStudentsSource';
import { Link } from "react-router-dom";


const DataStudentsTable = () => {
  const[data ,setData] = useState(studentsRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };  

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
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
              >Delete
              
            </div>
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
        rows={data}
        columns={studentsColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    
    </div>
  )
}

export default DataStudentsTable
