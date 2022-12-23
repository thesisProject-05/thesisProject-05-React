import React,{useState,useEffect} from 'react'
import axios from "axios";
import "./datahouseowner.scss"
import { DataGrid} from '@mui/x-data-grid';
import { houseownerColumns} from '../../dataHouseOwnerSource';
import { Link } from "react-router-dom";
const DataHouseOwnerTable = () => {
  const[data ,setData] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3001/owner/`)
    .then((res)=>{
      console.log(res.data);
     setData(res.data);
    })
 },[])
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
              <div className="viewButton">View</div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}>Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className='datahouseownertable'>
      <div className="datahouseownerTableTitle">
        <span>Add New House Owner</span>
        <Link to="/houseOwner/:houseOwnerId/new" style={{ textDecoration: "none" }}>
        <span className="link">Add New</span>
        </Link>
      </div>
      <DataGrid
      className='datagrid'
        rows={data}
        columns={houseownerColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    
    </div>
  )
}

export default DataHouseOwnerTable