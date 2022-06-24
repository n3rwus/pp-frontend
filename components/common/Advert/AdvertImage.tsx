import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { base64ToArrayBuffer, NO_IMAGE } from '../../Utils';

interface iUploadImageButton {
	id: string | null;
	jwtToken: string | null;
	advertId: number;
	image?: string;
}

const AdvertImage = (props: iUploadImageButton) => {
	const { id, jwtToken, advertId, image } = props;

	const createImage = () => {
		const blob = new Blob([new Uint8Array(base64ToArrayBuffer(image ?? ''))]) as BlobPart;
		const blobPart: BlobPart[] = [];
		blobPart.push(blob);
		const fileImg: File = new File(blobPart , 'image.png');
		return URL.createObjectURL(fileImg);
	}
	
	return (
		<Card sx={{ mx: 'auto', mb: '15px', border: '1px solid #002f34' }}>
			<CardMedia component="img" height="400" image={image === '' ? NO_IMAGE : createImage()} alt="photo" />
		</Card>
	);
};

export default AdvertImage;