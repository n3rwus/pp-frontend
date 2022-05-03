import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { InputAdornment, useTheme } from '@mui/material';

interface SearchComboBoxStylesProps {
	rightBorder ?: number;
	leftBorder ?: number;
	topBorder ?: number;
	bottomBorder ?: number;
	options : {
		name: string;
		key: number;
	}[];
}

interface SearchComboBoxProps extends SearchComboBoxStylesProps {
	startIcon ?: React.ReactElement;
	placeholder ?: string;
}

const styles = (theme: any, props: SearchComboBoxStylesProps) => ({
	minHeight: '60px',
	p: '5px',
	color: '#002f34 !important',
	borderRight: props.rightBorder ?? 0,
	borderLeft: props.leftBorder ?? 0,
	borderColor: '#f2f4f5',
	borderRadius: '0',
	[theme.breakpoints.down('sm')]: {
        borderRight: 0,
		borderLeft: 0,
		p: 0,
		borderTop: props.topBorder ?? 0,
		borderBottom: props.bottomBorder ?? 0,
		borderColor: '#f2f4f5',
    },
	'& .MuiOutlinedInput-root': {
		'& > fieldset': {
			border: 'none',
		},
		'&:hover fieldset': {
			border: 'none',
		},
		'&.Mui-focused fieldset': {
			border: 'none',
		}
	}
});

export default function SearchComboBox(props: SearchComboBoxProps) {
	const theme = useTheme();
	const opt = props.options;
	return (
		
		<Autocomplete
			freeSolo
			id='search-combo-box'
			disableClearable
			aria-label=''
			options={opt.map((option) => option.name)}
			renderInput={(params) => (
			<TextField
				{...params}
				fullWidth
				placeholder={props.placeholder}
				sx={styles(theme, props)}
				InputProps={{
					...params.InputProps,
					type: 'search',
					startAdornment: (
					  	<InputAdornment position='start'>
							{props.startIcon}
					  	</InputAdornment>
					),
				}}
				
			/>
			)}
		/>
	);
}