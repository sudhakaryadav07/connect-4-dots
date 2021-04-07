import React from 'react';
import { Grid } from '@material-ui/core';

import avatar01 from '../images/avatar01.png';
import avatar02 from '../images/avatar02.png';

import { userInputTitle, userContainer, userImageContainer, userImage, userTextContainer, userInput } from '../styles/screen1';


function PlayerDetails({ background, border, title, name, value, handleChangeUsername }) {
    return (
        <Grid style={{ ...userContainer, backgroundColor: background }}>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={2} style={userImageContainer}>
                    <img style={{ ...userImage, border: border }} src={title === 'Player 01' ? avatar01 : avatar02} />
                </Grid>
                <Grid item xs={12} sm={10} style={userTextContainer}>
                    <p style={userInputTitle}>{title}</p>
                    <input
                        name={name}
                        value={value}
                        className="cinput"
                        onChange={(e) => handleChangeUsername(e)}
                        style={userInput}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PlayerDetails
