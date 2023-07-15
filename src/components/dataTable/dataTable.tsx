import React from 'react';
import DataTable from 'react-data-table-component';
import {columns} from '../../constants/headers';
import {rows} from '../../constants/rows';

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
        <div className="text-end">
          <label htmlFor="search" style={{float:'right'}}>
            Search by Name:
            <input type="text" onChange={handleFilter} style={{outline:'auto'}}/>
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
       />
      </div>
       {/* <label htmlFor="search">
        Search by:
        <input id="search" type="text" onChange={handleSearch} style={{outline: "auto"}}/>
      </label> */}

    
      </>
      
    )
}

export default Table;