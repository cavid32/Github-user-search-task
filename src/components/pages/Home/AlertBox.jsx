import React, { forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const AlertBox = ({ state, setState }) => {
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <div>
      <Snackbar
       anchorOrigin={state}
        open={state.open}
        autoHideDuration={6000}
        onClose={handleClose}
        key={state.vertical + state.horizontal}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Please type anything
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AlertBox;
