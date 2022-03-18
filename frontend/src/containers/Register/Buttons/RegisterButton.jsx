// Import React
import React from 'react';

// Import the button & icon classes from mui
import {
    Button,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const RegisterButton = (props) => {
    // Custom button styling
    const ButtonProps = {
        width: '100%',
        height: '36px',
        backgroundColor: 'var(--primary-button-background)',
        textTransform: 'uppercase',
        fontSize: '14px',
        fontWeight: '400',
        whiteSpace: 'nowrap',
        marginRight: '0 2px',
        padding: '10px 30px',
        border: '1px solid transparent',
        borderRadius: '2px',
        outline: '0',
        boxShadow: 'none',
        textAlign: 'center',
        verticalAlign: 'middle',
        curser: 'pointer',
        userSelect: 'none',

        '&&:hover': {
            backgroundColor: 'var(--primary-button-background_lighter)',
        },
        '&& .MuiSvgIcon-root': {
            fontSize: '18px',
            marginRight: '10px',
        },
    };

    return (
        <Button
            variant='contained'
            sx={ButtonProps}
            disableRipple
            type='submit'
            onClick={props.onClick}
        >
            <LoginIcon className='login_icon' />
            <span>Join now</span>
        </Button>
    )
}

export default RegisterButton