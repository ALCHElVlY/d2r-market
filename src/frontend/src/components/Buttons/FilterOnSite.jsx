// External imports
import {
	Button,
	Radio,
	FormControlLabel,
} from '@mui/material';

const FilterOnSite = () => {
	// Custom button styling
	const ButtonProps = {
		color: 'white',
		backgroundColor: 'var(--primary-button-background)',
		textTransform: 'none',
		marginRight: '3px',
		height: '30px',

		'&&:hover': {
			backgroundColor: 'var(--primary-active-link)',
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
				value="filterOnSite"
				control={<Radio sx={RadioProps} disableRipple />}
				label="On Site" />
		</Button>
	);
};

export default FilterOnSite;
