import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import { PlayCircleOutline } from '@material-ui/icons';
import {
    titleContainer, imageContainer, title, primaryTitle, secondaryTitle, playButtonContainer, playButtonPrimary,
    screen1Action, playButtonSecondary, iconColor, screen1Card, screen1Container
} from '../styles/screen1';
import CustomButton from './CustomButton';
import img1 from '../images/img1.png';

function Screen1({ message, handleClick }) {
    return (
        <Grid >
            <Grid item xs={6} sm={12} md={4} style={title}>
                <Grid item xs={12} sm={12} >
                    <div style={titleContainer}>
                        <p style={primaryTitle}>CONNECT FOUR!</p>
                        <p style={secondaryTitle}>Play with other players around the world.</p>
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} style={screen1Container}>
                <Grid item xs={6} sm={12} className='screen1' style={screen1Card}>
                    <Grid container >
                        <Grid item xs={12} sm={6} container alignItems="center" justify="center" >
                            <Grid item style={playButtonContainer}>
                                <p style={playButtonPrimary}>  <PlayCircleOutline fontSize="large" style={iconColor} /></p>
                                <p style={playButtonSecondary}>PLAY</p>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} container justify="flex-end" >
                            <img className="img-12" style={imageContainer} src={img1} />
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container spacing={3} style={screen1Action}>
                        <CustomButton
                            color='#4BABFF'
                            title="Custom Game"
                            image='one'
                            status={false}
                            handleButtonClick={handleClick}
                        />
                        <CustomButton
                            color='#4B7BFF'
                            title="Two Player"
                            image='two'
                            status={true}
                            handleButtonClick={handleClick}
                        />
                        <CustomButton
                            color='#4B4BFF'
                            title="Game Online"
                            image='online'
                            status={false}
                            handleButtonClick={handleClick}
                        />
                        <CustomButton
                            color='#6E4BFF'
                            title="Training Game"
                            image='training'
                            status={false}
                            handleButtonClick={handleClick}
                        />
                    </Grid>
                    {message ? <p style={{ paddingTop: 30, textAlign: 'center', height: '50px', color: 'green', fontWeight: 'bold' }}>{message} !</p> : ""}
                </Grid>
            </Grid>
        </Grid >
    )
}

export default Screen1;
