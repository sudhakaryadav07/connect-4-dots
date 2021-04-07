import React from 'react'
import { Grid, Button } from '@material-ui/core';
import { actionContainer, closeButton, okButton } from '../styles/screen1';

function DialogActions({ key, value, handleCloseDialog, handleOkDialog }) {
    return (
        <Grid container spacing={3} justify='center' alignItems='center' style={actionContainer}>
            <Grid item xs={6} sm={6} container justify='center' alignItems='flex-start' >
                <Button onClick={() => handleCloseDialog(key)}
                    style={closeButton}
                    size="large" variant="contained" color="primary">CANCEL</Button>
            </Grid>
            <Grid item xs={6} sm={6} container justify='center' alignItems='flex-end' >
                <Button onClick={() => handleOkDialog(value)}
                    style={okButton}
                    size="large" variant="contained" color="primary">OK</Button>
            </Grid>
        </Grid>
    )
}

export default DialogActions
