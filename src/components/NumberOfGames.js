import React, { Component } from 'react';
import { Grid, Dialog, DialogTitle, Divider, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { NUMBER_OF_GAMES } from '../constants/constants';
import DialogActions from './DialogActions';
import { gameTitle, gameBody, gameRadio, gameDivider } from '../styles/screen1';

class NumberOfGames extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfGames: this.props.noOfGames
        }
    }

    getOkData = async () => {
        await this.props.handleChangeNumberOfGames(this.state.numberOfGames)
        await this.props.handleClose('numberOfGames')
    }

    render() {
        let { numberOfGames, handleClose } = this.props;
        return (
            <Dialog open={true}  >
                <DialogTitle style={gameTitle}>Number of game</DialogTitle>
                <Grid container >
                    <Grid container spacing={3} justify='center' alignItems='center' style={gameBody}>
                        <RadioGroup style={{ width: '85%' }} name="games" value={this.state.numberOfGames} onChange={(e) => this.setState({ numberOfGames: e.target.value })} >
                            {
                                NUMBER_OF_GAMES.map(game =>
                                    <FormControlLabel style={gameRadio} value={game.value} control={<Radio />} label={game.name} />
                                )
                            }
                        </RadioGroup>
                    </Grid>
                    <Divider style={gameDivider} />
                    <DialogActions
                        key='numberOfGames'
                        value={numberOfGames}
                        handleCloseDialog={handleClose}
                        handleOkDialog={this.getOkData}
                    />
                </Grid>
            </Dialog >
        )
    }
}

export default NumberOfGames
