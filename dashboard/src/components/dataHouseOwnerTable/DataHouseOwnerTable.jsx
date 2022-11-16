import React,{useState} from 'react'
import "./datahouseowner.scss"
import { DataGrid} from '@mui/x-data-grid';
import { houseownerColumns,houseownerRows } from '../../dataHouseOwnerSource';
const DataHouseOwnerTable = () => {
  const[data ,setData] = useState(houseownerRows)

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
        <span className="link">Add New</span>
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