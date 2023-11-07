import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';

const CustomizedSnackbar = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar 
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
        open={open} autoHideDuration={6000} onClose={handleClose}
      >
        <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">Transaction successfully created.</MuiAlert>
      </Snackbar>
    </div>
  );
};

CustomizedSnackbar.propTypes = {
  open: PropTypes.bool.isRequired, // Validate open prop as a required boolean
  setOpen: PropTypes.func.isRequired, // Validate setOpen prop as a required function
};

export default CustomizedSnackbar;
