import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Link from 'next/link';

interface iRecivedMessage {
	advertId: string;
	advertTitle: string;
	senderUsername: string;
	senderId: string;
	messageId: string;
	message: string;
}

const RecivedMessage = (props: iRecivedMessage) => {
	const { advertId, advertTitle, senderUsername, senderId, messageId, message } = props;

	return (
		<Grid item xs={6}>
			<Card sx={{ maxWidth: '50%', mx: 'auto', mb: '30px', border: '2px solid #002f34' }}>
				<Grid item xs={6} sx={{py: '2px', ":hover": {backgroundColor: '#f2f4f5'}}}>
					<Typography variant="h5" component="div" textAlign={'center'}>
						{'Otrzymano: 21.05.2022 15:00'}
					</Typography>
				</Grid>
				<hr style={{ margin: '0px' }} />
				<Grid item xs={6} sx={{py: '2px', ":hover": {backgroundColor: '#002f34', color: '#fff'}}}>
					<Link href='/profile'>
						<Typography variant="h5" component="div" textAlign={'center'}>
							{'Od: Janusz'}
						</Typography>
					</Link>
				</Grid>
				<hr style={{ margin: '0px' }} />
				<Grid item xs={6} sx={{py: '2px', ":hover": {backgroundColor: '#002f34', color: '#fff'}}}>
					<Link href='dupa'>
						<Typography variant="h5" component="div" textAlign={'center'}>
							{'Ogłoszenie: Kupno samochodu'}
						</Typography>
					</Link>
				</Grid>
				<hr style={{ margin: '0px' }} />
				<Grid item xs={6} sx={{py: '2px', ":hover": {backgroundColor: '#f2f4f5', color: '#002f34'}}}>
					<Typography variant="h5" component="div" textAlign={'center'} >
						{'Wiadomość: Nie sprzedam Ci tego passata tak tanio, całe życie nim jeździłem'}
					</Typography>
				</Grid>
			</Card>
		</Grid>
	);
};

export default RecivedMessage;