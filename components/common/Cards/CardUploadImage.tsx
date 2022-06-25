import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

interface iUploadImageButton {
	image: File;
}

const CardUploadImage = (props: iUploadImageButton) => {
	const { image } = props;

	return (
		<Grid item xs={12}>
			<Card sx={{ maxWidth: 600, mx: 'auto', mb: '30px' }}>
				<CardMedia component="img" height="350" image={URL.createObjectURL(image)} alt="photo" />
				<CardContent>
					<Typography variant="h5" component="div" textAlign={'center'}>
						{'Twoje nowe zdjęcie'}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default CardUploadImage;