import { Button } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

interface iButtonSave {
	disabled?: boolean;
}
const Input = styled('input')({
	display: 'none',
});

const ButtonSave = (props: iButtonSave) => {
	const { disabled } = props;

	return (
		<React.Fragment>
			<Button variant="contained" component="span" disabled={disabled} sx={{ height: '56px',  backgroundColor: '#002f34', ":hover": {backgroundColor: '#7f9799'}}} fullWidth>
				{'Zapisz ogłoszenie'}
			</Button>
		</React.Fragment>
	);
};

export default ButtonSave;