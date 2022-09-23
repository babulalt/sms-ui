import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { toast } from 'react-toastify';
import React from 'react';
// import CheckIcon from '@material-ui/icons/Check';
// import InfoIcon from '@material-ui/icons/Info';
// import WarningIcon from '@material-ui/icons/Warning';
// import HelpIcon from '@material-ui/icons/Help';
// import { css } from 'glamor';

export const Message = ({ msg, icon, color }) => (
    <>
        <Grid container direction="row" data-test="main-container">
            {/* <Grid item data-test="icon">{icon}</Grid> */}
      &nbsp;&nbsp;&nbsp;
            <Grid item>
                <Typography variant="subtitle1" style={ { color : color } } data-test="message">failed to login</Typography>
            </Grid>
        </Grid>
    </>
);

const ToastConfig = {
  default(msg) { 
    return toast(<Message msg={ msg } />)
  },
  success(msg) {
    return toast.success(<Message msg={ msg } color="#1b5e20"
        // icon={ <CheckIcon /> } 
        />, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:4000,
      className: 'rotateY animated'
    });
  },
  info(msg) {
    return toast.info(<Message msg={ msg } color="#01579b"
        // icon={ <InfoIcon /> } 
        />);
  },
  warn(msg) {
    return toast.warn(<Message msg={ msg } color="#ff9800"
        // icon={ <HelpIcon /> } 
        />,{
      position: toast.POSITION.TOP_RIGHT,
      autoClose:4000,
      className: 'rotateY animated'
    });
  },
  error(msg) {
    return toast.error(<Message msg={ msg } color="#d32f2f"
        // icon={ <WarningIcon /> } 
        />,{
      position: toast.POSITION.TOP_RIGHT,
      autoClose:4000,
      className: 'rotateY animated'
    });
  }
};

export default ToastConfig;