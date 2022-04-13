// External imports
import {
	Button,
	Radio,
	FormControlLabel,
} from '@mui/material';

const FilterInGame = () => {
	// Custom button styling
	const ButtonProps = {
		backgroundColor: '#9c3c3c',
		textTransform: 'none',
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
			color: 'white',
		},
	};

	return (
		<Button
			variant='contained'
			sx={ButtonProps}
			disableRipple
		>
			<FormControlLabel
				value="filterInGame"
				control={<Radio sx={RadioProps} disableRipple />}
				label="In Game" />
		</Button>
	);
};

export default FilterInGame;
