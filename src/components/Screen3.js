import React from 'react';
import { Button, Divider, Grid, Paper } from '@material-ui/core';
import Player from './Player';

import { bounceInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import avatar01 from '../images/avatar01.png';
import avatar02 from '../images/avatar02.png';

import {
    screen3Container, screen3Card, matrixContainer, matrixRow, matrixPoint, winCircle, userCircle, userac, userbc, screen3Title1,
    screen3Title2, screen3Title3, screen3Title4, screen3Title5, screen3Title6, screen3Title7,
    screen3Button1, screen3Button2, screen3Button3, screen3Button4, screen3Button5
} from '../styles/screen1';

function Screen3({ player1, scoreQueueStatus, matchDraw, undoStep, winner, player2, handleUpdatePlayer, handleEndTournament, restartTheGame, showTournamentStatus, tournamentWinner, showSuccess, matrix, noOfGames, playingGame, handleStep, handleUndoStep, currentPlayer, winPattern }) {
    const isPatternMatched = (i, j) => {
        return winPattern && winPattern.filter(d => d.r == i && d.c == j).length == 1
    }

    return (
        <Grid >
            <Grid item xs={12} sm={12} className='screen2' style={screen3Container}>
                <Grid item xs={6} sm={12} md={4} className='screen2-1' style={screen3Card}>

                    <Grid container>
                        <Grid item xs={12} sm={8} md={8} >
                            <Paper style={matrixContainer}>
                                {matrix.map((rows, i) => {
                                    return (
                                        <div key={i} style={{
                                            ...matrixRow,
                                            marginTop: i === 0 ? 0 : 5
                                        }}>
                                            {rows.map((item, j) =>
                                                <div class='dot' key={j} onClick={() => handleStep(i, j)}
                                                    style={matrixPoint}>
                                                    {item === player1.name ?
                                                        isPatternMatched(i, j) ?
                                                            <div style={winCircle}>
                                                                <img alt="" style={{ ...userCircle, border: '5px solid #37AC5D' }} src={avatar01} />
                                                            </div>
                                                            : <StyleRoot>
                                                                <img alt="" style={{ ...userac, animation: 'x 1s', animationName: Radium.keyframes(bounceInDown, 'bounceInDown') }} src={avatar01} />
                                                            </StyleRoot>

                                                        : item === player2.name ?
                                                            isPatternMatched(i, j) ?
                                                                <div style={winCircle}>
                                                                    <img alt="" style={{ ...userCircle, border: '5px solid #F8D146' }} src={avatar02} />
                                                                </div>
                                                                : <StyleRoot> <img alt="" style={{ ...userbc, animation: 'x 1s', animationName: Radium.keyframes(bounceInDown, 'bounceInDown') }} src={avatar02} />
                                                                </StyleRoot>
                                                            : ""}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} style={{ padding: 4 }}>

                            <div style={screen3Title1}>{noOfGames} Games Tournament</div>
                            {
                                matchDraw ?
                                    <p style={screen3Title2}>Match draw !</p>
                                    : showTournamentStatus ?
                                        <div style={screen3Title3}>
                                            Congratulation!
                         <p style={screen3Title4}>{tournamentWinner}, you won tournament !</p>
                                        </div> :
                                        showSuccess ?
                                            <div style={screen3Title5}>
                                                Congratulation!
                                <p style={screen3Title6}>{winner}, you won Game {playingGame}</p>
                                            </div>
                                            : <div style={screen3Title7}>Playing Game {playingGame}</div>}

                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} >
                                    <Player
                                        background="#DCF6E4"
                                        color="5px solid #37AC5D"
                                        title="Player 01"
                                        player={player1}
                                        currentPlayer={currentPlayer}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} >
                                    <Player
                                        background="#F6EFD5"
                                        color="5px solid #F8D146"
                                        title="Player 02"
                                        player={player2}
                                        currentPlayer={currentPlayer}
                                    />
                                </Grid>
                            </Grid>
                            <div style={{ margin: '10px 0px 10px 0px' }}><Divider /></div>


                            {showSuccess ?
                                <Button fullWidth onClick={() => handleUpdatePlayer()} style={screen3Button1}>Next Game</Button>
                                : showTournamentStatus || matchDraw ?
                                    <Button fullWidth onClick={() => restartTheGame()} style={screen3Button2}>Play Again</Button>
                                    : scoreQueueStatus ? <Button fullWidth onClick={() => undoStep()} style={screen3Button3}>Undo Step</Button>
                                        : <Button fullWidth disabled style={screen3Button4}>Undo Step</Button>
                            }

                            <Button fullWidth onClick={() => handleEndTournament()} style={screen3Button5}>End Tournament</Button>

                        </Grid>
                    </Grid>

                </Grid>
            </Grid >
        </Grid >
    )
}

export default Screen3;
