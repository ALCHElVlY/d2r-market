// Import React
import React from 'react';

// Import the button & icon classes from mui
import {
    Button,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const LoginButton = (props) => {
    // Custom button styling
    const ButtonProps = {
        backgroundColor: 'var(--primary-button-background)',
        textTransform: 'uppercase',
        marginRight: '3px',
        width: '137px',
        height: '36px',

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
            <span>Sign In</span>
        </Button>
    )
}

export default LoginButton