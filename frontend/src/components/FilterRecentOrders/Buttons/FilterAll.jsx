// Import React
import React from 'react';

// Import the Button class from mui
import {
    Button,
    Radio,
    FormControlLabel,
} from '@mui/material';

const FilterAll = () => {
    // Custom button styling
    const ButtonProps = {
        backgroundColor: '#9c3c3c',
        textTransform: 'none',
        marginRight: '3px',
        height: '30px',

        '&&:hover': {
            backgroundColor: '#9c3c3c',
        },
        '&& .MuiSvgIcon-root': {
            fontSize: '18px',
        },
    };

    // Custom radio button styling
    const RadioProps = {
        color: 'white',
        '&.Mui-checked': {
            color: 'white'
        },
    };

    return (
        <Button
            variant='contained'
            size='small'
            sx={ButtonProps}
            disableRipple
        >
            <FormControlLabel
                value="filterAll"
                control={<Radio sx={RadioProps} disableRipple />}
                label="All" />
        </Button>
    );
};

export default FilterAll;
