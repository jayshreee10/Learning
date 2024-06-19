import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));

// const DialogBox = () => (
//   <DialogContent dividers>
//     <Typography gutterBottom>
//       Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//       dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//       consectetur ac, vestibulum at eros.
//     </Typography>
//     <Typography gutterBottom>
//       Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
//       Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
//     </Typography>
//     <Typography gutterBottom>
//       Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
//       magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
//       ullamcorper nulla non metus auctor fringilla.
//     </Typography>
//   </DialogContent>
// );

function Table() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "dealerId",
      headerName: "Dealer name",
      width: 150,
      editable: false,
    },
    {
      field: "invoice",
      headerName: "Invoice Number",
      width: 150,
      editable: false,
    },
    {
      field: "invDate",
      headerName: "Receipt Date",
      width: 150,
      editable: false,
    },
    {
      field: "Payemnt",
      headerName: "Payment Mode",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      width: 150,
      editable: false,
    },
  ];

  const rows = [
    { id: 1, invoice: "Inv-405", dealerId: "Saha Automobiles", amount: 14, invDate: "13 JUL", Payemnt: "Online" },
    { id: 2, invoice: "Inv-405", dealerId: "Saha Automobiles", amount: 14, invDate: "13 JUL", Payemnt: "Online" },
    { id: 3, invoice: "Inv-405", dealerId: "Saha Automobiles", amount: 14, invDate: "13 JUL", Payemnt: "Online" },
    { id: 4, invoice: "Inv-405", dealerId: "Saha Automobiles", amount: 14, invDate: "13 JUL", Payemnt: "Online" },
    { id: 5, invoice: "Inv-405", dealerId: "Saha Automobiles", amount: 14, invDate: "13 JUL", Payemnt: "Online" },
    { id: 6, invoice: "Inv-405", dealerId: "Saha Automobiles", amount: 14, invDate: "13 JUL", Payemnt: "Online" },
    { id: 7, invoice: "Inv-405", dealerId: "Saha Automobiles", amount: 14, invDate: "13 JUL", Payemnt: "Online" },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{background:"black"}}>
      hiiii
      {/* <div
        style={{
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Box sx={{ height: "90vh", width: "90vw", marginLeft: "5vw" }}>
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
      </div> */}
      {/* <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open dialog
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            RC GROUP COLLECTION
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogBox />
          <DialogActions>
            <Button autoFocus onClick={handleClose} variant='contained'>
              Back
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment> */}
    </div>
  );
}

export default Table;
