import React from 'react';
import DataTable from 'react-data-table-component';
import {columns} from '../../constants/headers';
import {rows} from '../../constants/rows';
import { CSVLink } from "react-csv";

interface rows {
  id: BigInteger,
  timestamp: string,
  purchaseid: BigInteger,
  mail: string,
  name: string,
  source: string,
  status: string,
}

function Table(){
  const [records, setRecords] = React.useState(rows);

  const handleFilter = (event: any) => {
   const newData = rows.filter(row => {
    return row.name.toLowerCase().includes(event.target.value.toLowerCase());
   })
   setRecords(newData)
  }

    return(
      <>
      <div className="container mt-5">
        <div className="text-end">
        <CSVLink className="downloadbtn" filename="bookings.csv" data={rows} style={{float: 'right','backgroundColor': 'rgb(66 63 217)','color': 'white','padding': '5px','borderRadius': '10px','marginRight': '17px','marginTop': '3px'}}>
        Export to CSV
      </CSVLink>&nbsp;&nbsp;
          <label htmlFor="search" style={{float:'right',marginRight:'2%', marginTop:'8px'}}>
            Search by Name: 
            &nbsp;<input type="text" onChange={handleFilter} style={{outline:'auto'}}/>
          </label>
          </div>
      <DataTable 
      title="Bookings"
      columns={columns}
      data={records}
      paginationRowsPerPageOptions={[5, 10, 15, 25, 50]}
      onColumnOrderChange={cols => console.log(cols)} 
      pagination
      fixedHeader
      selectableRows
      conditionalRowStyles={[
        {
          when: (row) => row.status === "Failed",
          style: {
            backgroundColor: 'red',
          },
        },
        {
          when: (row) => row.status === "Paid",
          style: {
            backgroundColor: 'green',
          },
        },
        {
          when: (row) => row.status === "Waiting",
          style: {
            backgroundColor: 'yellow',
          },
        },
      ]}   
          />
      </div>
      </>
      
    )
}

export default Table;