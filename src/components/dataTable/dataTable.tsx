import React,{useMemo, useState} from 'react';
import DataTable from 'react-data-table-component';
import {columns} from '../../constants/headers';
import {rows} from '../../constants/rows';
import {TfiDashboard} from 'react-icons/tfi';
import FilterComponent from './search';

interface rows {
  id: BigInteger,
  timestamp: string,
  purchaseid: BigInteger,
  mail: string,
  name: string,
  source: string,
  status: string
}


 export default function Table(){
  
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  
  const filteredItems = rows.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    
    return (
      <FilterComponent
      onFilter={(e:any) => setFilterText(e.target.value)}
      onClear={handleClear}
      filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);


  const customStyles= {
    headRow:{
      style:{
        backgroundColor: '#8abae4',
        borderRadius: '28px',
        color: 'white',
      }
    },
    header:{
      cell:() => {
        return <div>
          <TfiDashboard /> 
        </div>
      },
      style:{
        backgroundColor: 'pink',
        color:'white',
        borderRadius:'28px',
        paddingLeft:'41%',
   }
    },
    rows:{
      style:{
        borderRadius:'32px',
        boxShadow:'2px solid',
        minHeight:'23px',
        '&:not(:last-of-type)': {
          borderBottomStyle: 'solid',
          borderBottomWidth: '2px',
        },
        denseStyle: {
			minHeight: '32px',
		},
   
      }
    },
    selectedHighlightStyle:{
      '&:nth-of-type(n)': {
        backgroundColor: '#8abae4',
        borderRadius: '28px',
        color: 'white',
			},
    }
  }

    return(
      <>
      <div className="container mt-5">
      <DataTable 
      title="Booking Dashboard"
      columns={columns}
      data={filteredItems}
      paginationRowsPerPageOptions={[5, 10, 15, 25, 50]}
      pagination
      fixedHeader
      subHeader
      subHeaderComponent={subHeaderComponent}
      fixedHeaderScrollHeight={'50'}
      selectableRows
      paginationPerPage={5}
      responsive
      customStyles={customStyles}
      striped/>
      </div>
      </>
    )
}

