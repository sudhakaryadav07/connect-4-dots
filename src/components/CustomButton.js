import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { button } from '../styles/screen1';

import one from '../images/one.png';
import online from '../images/online.png';
import two from '../images/two.png';
import training from '../images/training.png';

import { screenOneButtonIcon } from '../styles/screen1'

function CustomButton({ color, title, status, image, handleButtonClick }) {
    return (
        <Grid item xs={12} sm={6}>
            <Button
                fullWidth
                onClick={() => handleButtonClick(status)}
                startIcon={<img alt="img1" style={screenOneButtonIcon}
                    src={image === 'one' ? one : image === 'two' ? two : image === 'online' ? online : training} />}
                style={{ ...button, backgroundColor: color }}
                size="large" variant="contained" color="primary">{title}</Button>
        </Grid>
    )
}

export default CustomButton
