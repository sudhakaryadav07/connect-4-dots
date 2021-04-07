import React from 'react'
import { Typography, Toolbar, AppBar, IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { appbar, appbarIcon, appbarTitleContainer, appbarTitle } from '../styles/screen1';

function Appbar({ handleBack }) {
    return (
        <AppBar style={appbar} position="absolute">
            <Toolbar className="appbar">
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => handleBack()}>
                    <ArrowBack style={appbarIcon} />
                </IconButton>
                <Typography style={appbarTitleContainer} variant="h6" >
                    <p style={appbarTitle}>Two Players Game</p>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar;
