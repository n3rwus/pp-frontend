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
}

const styles = (theme: any, props: StylesProps) => ({
	minHeight: '60px',
	p: '5px',
	borderRight: props.rightBorder ?? 0,
	borderLeft: props.leftBorder ?? 0,
	borderColor: '#d3d3d3',
	[theme.breakpoints.down('sm')]: {
        borderRight: 0,
		borderLeft: 0,
		borderTop: props.topBorder ?? 0,
		borderBottom: props.bottomBorder ?? 0,
		borderColor: '#d3d3d3',
    },
});


export default function TextFieldIcon(props: TextFieldIconProps) {
	const theme = useTheme();

	return (
		<Input
			id='icon-textfield'
			placeholder={props.placeholder}
			fullWidth={true}
			sx={styles(theme, props)}
			disableUnderline={true}
			startAdornment = {
				<InputAdornment position="start">
					{props.icon}
				</InputAdornment>
			}
		/>
	);
}