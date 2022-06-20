import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

interface iSimplyAdvert {
	image ?: File;
	index: number;
}

const SimplyAdvert = (props: iSimplyAdvert) => {
	const { image, index } = props;

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				height="140"
				image="backgroundExample.jpg"
				alt="Live from space album cover"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{'Tytuł'}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{'Cena'}
				</Typography>
			</CardContent>
	  </Card>
	);
};

export default SimplyAdvert;