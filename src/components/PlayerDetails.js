import React from 'react';
import { Grid } from '@material-ui/core';

import winner from '../images/winner.png';
import run from '../images/run.png';

import { userInputTitle, userContainer, userImageContainer, userImage, userTextContainer, userInput } from '../styles/screen1';

function PlayerDetails({ ptitle, value, handlePlayerDetailAction }) {
    return (
        <Grid style={{ ...userContainer, backgroundColor: '#EFF3FF' }} >
            <Grid container spacing={3} >
                <Grid item xs={12} sm={2} style={userImageContainer}>
                    <img alt="" style={{ ...userImage, border: '7px solid #B1C4F9', }} src={ptitle === 'Number of games' ? winner : run} />
                </Grid>
                <Grid item xs={12} sm={10} style={userTextContainer}>
                    <p style={userInputTitle}>{ptitle}</p>
                    <input
                        className="cinput"
                        value={value}
                        readOnly
                        onClick={handlePlayerDetailAction}
                        style={userInput}
                    />
                </Grid>
            </Grid>
        </ Grid >
    )
}

export default PlayerDetails
