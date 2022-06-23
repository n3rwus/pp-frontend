import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import { iSimplyAdvert } from '../../../data/AdvertDataProvider';
import { base64ToArrayBuffer } from '../../Utils';

const SimplyAdvert = (props: iSimplyAdvert) => {
	const { advertId, image, title, price } = props;
	
	const createImage = () => {
		const blob = new Blob([new Uint8Array(base64ToArrayBuffer(image ?? ''))]) as BlobPart;
		const blobPart: BlobPart[] = [];
		blobPart.push(blob);
		const fileImg: File = new File(blobPart , 'image.png');
		return URL.createObjectURL(fileImg);
	}

	return (
		<Card sx={{ maxWidth: 380, mx:'auto'}}>
			<CardMedia
				component="img"
				height="200"
				image={image ? createImage() : 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
				alt="Live from space album cover"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title ?? 'Tytuł'}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{(price ?? 'Cena') + ' zł'}
				</Typography>
			</CardContent>
	  </Card>
	);
};

export default SimplyAdvert;