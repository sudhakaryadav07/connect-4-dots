import React,{Component} from 'react';
import { Grid, Dialog, DialogTitle, Divider,  RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { WHO_STARTS } from '../constants/constants';
import DialogActions from './DialogActions';
import { gameTitle, gameBody, gameRadio, gameDivider } from '../styles/screen1';

class WhosTurn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            whoToStarts: this.props.whoStarts
        }
    }

    getOkData = async () => {
        await this.props.handleWhosTurn(this.state.whoToStarts)
        await this.props.handleClose('whoStarts')
    }

    render() {
        let { whoStarts, handleClose } = this.props;
        return (
            <Dialog open={true}  >
                <DialogTitle style={gameTitle}>Who starts</DialogTitle>
                <Grid container >
                    <Grid container spacing={3} justify='center' alignItems='center' style={gameBody}>
                        <RadioGroup style={{ width: '85%' }} name="games" value={this.state.whoToStarts} onChange={(e) => this.setState({ whoToStarts: e.target.value })} >
                            {
                                WHO_STARTS.map(game =>
                                    <FormControlLabel style={gameRadio} value={game.value} control={<Radio />} label={game.name} />
                                )
                            }
                        </RadioGroup>
                    </Grid>
                    <Divider style={gameDivider} />
                    <DialogActions
                        key='gKeyWhosTurn'
                        value={whoStarts}
                        handleCloseDialog={handleClose}
                        handleOkDialog={this.getOkData}
                    />
                </Grid>
            </Dialog >
        )
    }
}

export default WhosTurn

