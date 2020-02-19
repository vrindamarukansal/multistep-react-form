import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider > 
        <React.Fragment>
        <Dialog 
            open="true"
            fullWidth="true"
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions</p>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
        )
    }
}

export default Success
