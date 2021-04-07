import React from 'react';
import { Paper } from '@material-ui/core';


import avatar01 from '../images/avatar01.png';
import avatar02 from '../images/avatar02.png';

import {
    playerContainer, playerCard, playerImageContainer, playerImageBorder, playerImage,
    playerBodyContainer, playerBody, playerDetailWidth, playerDetailCard, playerCardHeight1, playerCardHeight2,playerTitle, playerName
} from '../styles/screen1';

function Player({ background, color, title, player, currentPlayer }) {

    let border = player.name === currentPlayer.name ? "5px solid #FFA200" : "";

    return (
        <Paper style={{ ...playerContainer, backgroundColor: background }}>
            <div style={playerCard}>
                <div style={playerImageContainer}>
                    <div style={{ ...playerImageBorder, border: border }}>
                        <img alt="" style={{ ...playerImage, border: color }} src={title === 'Player 01' ? avatar01 : avatar02} />
                    </div>
                </div>
                <div style={playerBodyContainer}>
                    <div style={playerBody}>
                        <div style={playerDetailWidth}>
                            <div style={playerDetailCard}>
                                <div style={playerCardHeight1}>
                                    <p style={playerTitle}>{title}</p>
                                </div>
                                <div style={playerCardHeight2}>
                                    <p style={playerName}>{player.name}</p>
                                </div>
                            </div>
                        </div>
                        <div style={playerDetailWidth}>
                            <div style={playerDetailCard}>
                                <div style={playerCardHeight1}>
                                    <p style={playerTitle}>Score</p>
                                </div>
                                <div style={playerCardHeight2}>
                                    <p style={playerName}>{player.score}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    )
}

export default Player
