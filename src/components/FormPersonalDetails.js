import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    } 

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <Dialog 
                        open="true"
                        fullWidth="true"
                        maxWidth='sm'
                    >
                    <AppBar title = "Enter Personal Details"/>
                    <TextField
                        hintText = "Enter your Occupation"
                        floatingLabelText = "Occupation"
                        onChange = {handleChange('occupation')}
                        defaultValue = { values.occupation}
                        margin = "normal"
                        fullWidth = "true"
                    />
                    <br/>
                    <TextField
                        hintText = "Enter your City"
                        floatingLabelText = "City"
                        onChange = { handleChange('city')}
                        defaultValue = { values.city}
                        margin = "normal"
                        fullWidth = "true"
                    />
                    <br/>
                    <TextField
                        hintText = "Enter your Bio"
                        floatingLabelText = "Bio"
                        onChange = { handleChange('bio')}
                        defaultValue = { values.bio}
                        margin = "normal"
                        fullWidth = "true"
                    />
                    <br/>
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={this.back}
                    >Back</Button>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={this.continue}
                    >Continue</Button>
                </Dialog>    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormPersonalDetails
