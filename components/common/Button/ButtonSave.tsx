import { Button } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

interface iButtonSave {
	disabled?: boolean;
	text?: string;
	onSaveClick: () => Promise<void>;
}
const Input = styled('input')({
	display: 'none',
});

const ButtonSave = (props: iButtonSave) => {
	const { text, disabled, onSaveClick } = props;

	return (
		<React.Fragment>
			<Button 
				variant="contained" 
				component="span" 
				disabled={disabled} 
				sx={{ height: '56px',  backgroundColor: '#002f34', ":hover": {backgroundColor: '#7f9799'}}} 
				fullWidth
				onClick={onSaveClick}
			>
				{text ?? 'Zapisz ogłoszenie'}
			</Button>
		</React.Fragment>
	);
};

export default ButtonSave;