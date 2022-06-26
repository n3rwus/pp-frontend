import * as React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';

interface StylesProps {
	topBorder?: number;
	bottomBorder?: number;
}

interface ButtonTextIconProps extends StylesProps {
	text?: string;
	endIcon?: React.ReactElement;
	startIcon?: React.ReactElement;
	onClick?: () => void;
}

const styles = (theme: any, props: StylesProps) => ({
	height: '100%',
	backgroundColor: '#fff',
	color: '#002f34',
	borderRadius: '0',
	borderColor: '#f2f4f5',
	borderLeft: 'solid 1px #f2f4f5',
	'&:hover': {
		backgroundColor: '#002f34',
		color: '#fff',
	},
	[theme.breakpoints.down('sm')]: {
        borderRight: 0,
		borderLeft: 0,
		borderTop: props.topBorder ?? 0,
		borderBottom: props.bottomBorder ?? 0,
		borderColor: '#f2f4f5',
    },
});

export default function ButtonTextIcon(props: ButtonTextIconProps) {
	const theme = useTheme();

	const {
		onClick,
	} = props;

	return (
		<Button
			onClick={onClick}
			startIcon={props.startIcon}
			endIcon={props.endIcon}
			fullWidth
			sx={styles(theme, props)}
		>
			{props.text}
		</Button>
	);
}