import * as React from 'react';
import { Input, InputAdornment, useTheme } from '@mui/material';

interface StylesProps {
	rightBorder?: number;
	leftBorder?: number;
	topBorder?: number;
	bottomBorder?: number;
}

interface TextFieldIconProps extends StylesProps {
	icon?: React.ReactElement;
	placeholder?: string;
	value?: string;
	onChange?: React.Dispatch<React.SetStateAction<string>>;
}

const styles = (theme: any, props: StylesProps) => ({
	minHeight: '60px',
	p: '5px',
	mt: '5px',
	color: '#002f34',
	borderRight: props.rightBorder ?? 0,
	borderLeft: props.leftBorder ?? 0,
	borderColor: '#f2f4f5',
	[theme.breakpoints.down('sm')]: {
		pb: 0,
        borderRight: 0,
		borderLeft: 0,
		borderTop: props.topBorder ?? 0,
		borderBottom: props.bottomBorder ?? 0,
		borderColor: '#f2f4f5',
    },
	'& .MuiOutlinedInput-root': {
		pl: '9px',
	}
});


export default function TextFieldIcon(props: TextFieldIconProps) {
	const theme = useTheme();

	const {
		value,
		onChange,
		placeholder,
	} = props;

	return (
		<Input
			id='icon-textfield'
			placeholder={placeholder}
			fullWidth
			value={value}
			onChange={e => onChange!(e.target.value)}
			sx={styles(theme, props)}
			disableUnderline={true}
			startAdornment = {
				<InputAdornment position='start'>
					{props.icon}
				</InputAdornment>
			}
		/>
	);
}