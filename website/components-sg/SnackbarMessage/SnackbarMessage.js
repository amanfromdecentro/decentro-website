import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { makeStyles, Theme } from "@material-ui/core/styles";

function Alert(AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...AlertProps} />;
}

const useStyles = makeStyles((Theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: Theme.spacing(2),
    },
  },
}));

function SnackbarMessage(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    // ReactDOM.unmountComponentAtNode(document.getElementById("snackbar"));
    const root = ReactDOM.createRoot(document.getElementById("snackbar"));
    root.unmount();
  };
  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.msgtype}>
          {props.msg}
        </Alert>
      </Snackbar>
    </div>
  );
}

Snackbar.propTypes = {
  msgtype: PropTypes.string,
  msg: PropTypes.string,
};

Snackbar.defaultProps = {
  msgtype: "success",
  msg: "Successful",
};

export default SnackbarMessage;
