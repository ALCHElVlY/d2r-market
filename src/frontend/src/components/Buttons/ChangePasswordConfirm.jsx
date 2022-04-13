// External imports
import {
	Button,
} from '@mui/material';

const ChangePasswordConfirm = (props) => {
	// Custom button styling
	const ButtonProps = {
		width: '50%',
		height: '36px',
		backgroundColor: 'var(--primary-button-background)',
		fontSize: '14px',
		fontWeight: '400',
		whiteSpace: 'nowrap',
		marginRight: '0 2px',
		padding: '.6rem .75rem',
		border: '1px solid transparent',
		borderRadius: '2px',
		outline: '0',
		boxShadow: 'none',
		textAlign: 'center',
		lineHeight: '1',
		verticalAlign: 'middle',
		curser: 'pointer',
		userSelect: 'none',

		'&&:hover': {
			backgroundColor: 'var(--primary-button-background_lighter)',
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
			<span>Change</span>
		</Button>
	);
};

export default ChangePasswordConfirm;