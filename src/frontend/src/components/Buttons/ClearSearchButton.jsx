// External imports
import { Backspace as BackspaceIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const ClearSearchButton = (props) => {
	// Event handlers
	const onClick = () => { return props.onClick(); };

	// If check to render the visible clear search button
	if (!props.isVisible) return null;


	return (
		<IconButton aria-label='clear' onClick={onClick}>
			<BackspaceIcon
				htmlColor='white'
				fontSize='small'
			/>
		</IconButton>
	);
};

export default ClearSearchButton;
