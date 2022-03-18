// Import React
import React from 'react';

// Import components from mui
import { IconButton } from '@mui/material';

// Import material UI icons
import { Backspace as BackspaceIcon } from '@mui/icons-material';

const ClearSearchButton = (props) => {
    // Custom onClick function to clear the search input
    // when the user clicks the clear search button
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
    )
};

export default ClearSearchButton;
