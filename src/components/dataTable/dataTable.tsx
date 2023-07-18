import React from 'react';
import DataTable from 'react-data-table-component';
import {columns} from '../../constants/headers';
import {rows} from '../../constants/rows';
import { CSVLink } from "react-csv";
import { Input, FormLabel, Select, FormControl, Button } from '@chakra-ui/react';
import {DownloadIcon, SearchIcon} from '@chakra-ui/icons';

interface rows {
  id: BigInteger,
  timestamp: string,
  purchaseid: BigInteger,
  mail: string,
  name: string,
  source: string,
  status: string
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
        <div className="text-end bg-white" style={{display:'flex',
    borderRadius: '5px',
    border:'2px solid #eeeeee',
    padding: '5px',
    margin: '7px',
    paddingBottom:'11px',
    justifyContent:'space-between'}}>
        
      <div className="">
        <FormLabel>What are you Looking For?</FormLabel>
      &nbsp;<Input type="search" placeholder="Search by Name"  variant="outline" onChange={handleFilter} style={{width:'98%'}}/>
      </div>
      <div className="" style={{width:"23%"}}>
      <FormControl>
  <FormLabel>Source</FormLabel>
  <Select placeholder='Select Source'>
    <option value="booking.com">Booking</option>
    <option value="airbnb.com">Airbnb</option>
    <option value="agoda.com">Agoda</option>
  </Select>
</FormControl>
      </div>
      <div className="" style={{width:"23%"}}>
      <FormControl>
  <FormLabel>Status</FormLabel>
  <Select placeholder='Select Status'>
    <option value="Failed">Failed</option>
    <option value="Waiting">Waiting</option>
    <option value="Paid">Paid</option>
  </Select>
</FormControl>
      </div>
      <div className="">
  <Button style={{backgroundColor:'rgb(53 177 225)', color:'white',marginTop:'32px'}}>Search&nbsp;
  {/* <SearchIcon fontSize='13px'
/> */}
</Button>
</div>
<CSVLink className="downloadbtn" filename="bookings.csv" data={rows} style={{float: 'right','backgroundColor': 'rgb(53 177 225)','color': 'white','padding': '5px','borderRadius': '10px','marginRight': '17px','marginTop': '32px'}}>
        <DownloadIcon /> Export to CSV
      </CSVLink>&nbsp;&nbsp;
          </div>
      <DataTable 
      title="Bookings"
      columns={columns}
      data={records}
      paginationRowsPerPageOptions={[5, 10, 15, 25, 50]}
      onColumnOrderChange={cols => console.log(cols)} 
      pagination
      fixedHeader
      paginationPerPage={5}
      selectableRows
      // conditionalRowStyles={[
      //   {
      //     if(row.status === "Failed")
      //     // style: {
      //     //   backgroundColor: 'red',
      //     // },
      //     classNames: ['Error']
      //   },
      //   {
      //     when: (row) => row.status === "Paid",
      //     style: {
      //       backgroundColor: 'green',
      //     },
      //   },
      //   {
      //     when: (row) => row.status === "Waiting",
      //     style: {
      //       backgroundColor: 'yellow',
      //     },
      //   },
      // ]}   
          />
      </div>
      </>
      
    )
}

export default Table;