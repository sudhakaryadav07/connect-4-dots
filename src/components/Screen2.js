import React from 'react';
import { Button, Divider, Grid } from '@material-ui/core';
import PlayerName from './PlayerName';
import PlayerDetails from './PlayerDetails';
import { screen2Container, screen2Card, screen2Divider, screen2Button } from '../styles/screen1';

function Screen2({ message, player1, player2, noOfGames, whoStarts, handleChange, handleClick, selectGame, selectTurn }) {
    return (
        <Grid >
            <Grid item xs={12} sm={12} className='screen2' style={screen2Container}>
                <Grid item xs={6} sm={12} md={4} className='screen2-1' style={screen2Card}>

                    <PlayerName
                        background='#dcf6e4'
                        border='7px solid #37AC5D'
                        title='Player 01'
                        name="player1"
                        value={player1.name}
                        handleChangeUsername={handleChange}
                    />

                    <PlayerName
                        background='#f6efd5'
                        border='7px solid #f8d146'
                        title='Player 02'
                        name="player2"
                        value={player2.name}
                        handleChangeUsername={handleChange}
                    />

                    <PlayerDetails
                        ptitle='Number of games'
                        value={noOfGames}
                        handlePlayerDetailAction={() => selectGame('selectGame')}
                    />

                    <PlayerDetails
                        ptitle='Who starts'
                        value={whoStarts}
                        handlePlayerDetailAction={() => selectTurn('gKeyWhosTurn')}
                    />

                    <Divider style={screen2Divider} />

                    <Button fullWidth onClick={() => handleClick()}
                        style={screen2Button}
                        size="large" variant="contained" color="primary">Start Game</Button>
                </Grid>
                {message ? <p style={{ paddingTop: 30, paddingBottom: 20, textAlign: 'center', height: '50px', color: 'green', fontWeight: 'bold' }}>{message} !</p> : ""}
            </Grid>
        </Grid >
    )
}

export default Screen2;
