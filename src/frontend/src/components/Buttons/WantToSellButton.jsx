// External imports
import {
	Button,
	Radio,
	FormControlLabel,
} from '@mui/material';

const WantToSell = () => {
	// Custom button styling
	const ButtonProps = {
        width: '118px',
		height: '34px',
		color: 'white',
		backgroundColor: 'var(--primary-button-background)',
		textTransform: 'none',
		marginRight: '3px',

		'&&:hover': {
			backgroundColor: 'var(--primary-active-link)',
		},
		'&& .MuiSvgIcon-root': {
			fontSize: '14px',
		},
	};

	// Custom radio button styling
	const RadioProps = {
		color: 'white',
		'&.Mui-checked': {
			color: 'white',
		},
	};

	return (
		<Button
            className="want_to_sell_button"
			variant='contained'
            size='small'
			sx={ButtonProps}
			disableRipple
		>
			<FormControlLabel
				value="wts"
				control={<Radio sx={RadioProps} disableRipple />}
				label="Want to Sell" />
		</Button>
	);
};

export default WantToSell;
