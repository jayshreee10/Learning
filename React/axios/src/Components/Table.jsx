import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
function Table() {
  

    // {
    //     "invoice": "inv-1294",
    //     "invoiceDate": "18-06-2024",
    //     "mode": "cash",
    //     "amount": "876",
    //     "dealerId": "66670c8914d76275d8861cce",
    //     "additionalPaymentDetails": null
    // }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'dealerId',
          headerName: 'Dealer name',
          width: 150,
          editable: true,
        },
        {
          field: 'invoice',
          headerName: 'Invoice',
          width: 150,
          editable: true,
        },
        {
          field: 'amount',
          headerName: 'Amount',
          type: 'number',
          width: 110,
          editable: true,
        },
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        // },
      ];

      const rows = [
        { id: 1, lastName: 'Snow', dealerId: 'Jon', age: 14 },
        { id: 2, lastName: 'Lannister', dealerId: 'Cersei', age: 31 },
        { id: 3, lastName: 'Lannister', dealerId: 'Jaime', age: 31 },
        { id: 4, lastName: 'Stark', dealerId: 'Arya', age: 11 },
        { id: 5, lastName: 'Targaryen', dealerId: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', dealerId: "me", age: 150 },
        { id: 7, lastName: 'Clifford', dealerId: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', dealerId: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', dealerId: 'Harvey', age: 65 },
      ];
      
  return (
    <div>
<div style={{width:"100vw",alignItems:"center", justifyContent:"center",height:"90vh"}}>
(
    <Box sx={{ height: "90vh", width: '90vw',marginLeft:"5vw" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
      />
    </Box>
  );
</div>

    </div>
  )
}

export default Table