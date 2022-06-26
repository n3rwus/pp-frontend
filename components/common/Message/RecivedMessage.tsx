import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Link from 'next/link';

export interface iRecivedMessage {
	advertId?: string;
	advertTitle?: string;
	senderUsername: string;
	senderId?: string;
	messageId?: string;
	message?: string;
	renderAdvert?: boolean;
	date?: string;
	renderDefaultText?: boolean;
}

const RecivedMessage = (props: iRecivedMessage) => {
	const { advertId, advertTitle, senderUsername, senderId, messageId, message, date, renderAdvert, renderDefaultText } = props;

	const dateFromat = new Date(date!);
	const formatedDate = () => {
		return dateFromat.toLocaleDateString() + ' ' + dateFromat.toLocaleTimeString();
	}

	return (
		<Grid item xs={6}>
			<Card sx={{ maxWidth: '50%', mx: 'auto', mb: '30px', border: '2px solid #002f34' }}>
				<Grid item xs={6} sx={{py: '2px', ":hover": {backgroundColor: '#f2f4f5'}}}>
					{renderDefaultText === true &&
						<Typography fontSize={'18px'} variant="h5" color={'text.secondary'} component="div" textAlign={'center'}>
							{'Otrzymano: ' + formatedDate()}
						</Typography>
					}
					{renderDefaultText !== true &&
						<Typography fontSize={'18px'} variant="h5" color={'text.secondary'} component="div" textAlign={'center'}>
							{formatedDate()}
						</Typography>
					}
				</Grid>
				<hr style={{ margin: '0px' }} />
				<Grid item xs={6} sx={{py: '2px', ":hover": {backgroundColor: '#002f34', color: '#fff'}}}>
					{renderDefaultText === true &&
						<Link href={{pathname:'/profile/', query: {senderId}}}>
							<Typography  fontSize={'20px'} variant="h5" component="div" textAlign={'center'}>
								{'Od: ' + senderUsername}
							</Typography>
						</Link>
					}
					{renderDefaultText !== true &&
						<Link href={{pathname:'/profile/', query: {senderId}}}>
							<Typography  fontSize={'20px'} variant="h5" component="div" textAlign={'center'}>
								{'Użytkownik: ' + senderUsername}
							</Typography>
						</Link>
					}
				</Grid>
				<hr style={{ margin: '0px' }} />
				{renderAdvert &&
					<div>
						<Grid item xs={6} sx={{py: '2px', ":hover": {backgroundColor: '#002f34', color: '#fff'}}}>
							<Link href={{pathname:'/advert/', query: {advertId}}}>
								<Typography  fontSize={'20px'} variant="h5" component="div" textAlign={'center'}>
									{'Ogłoszenie: ' + advertTitle}
								</Typography>
							</Link>
						</Grid>
						<hr style={{ margin: '0px' }} />
					</div>
				}
				<Grid item xs={6} sx={{py: '2px', ":hover": {backgroundColor: '#f2f4f5', color: '#002f34'}}}>
					<Typography fontSize={'18px'} variant="h5" component="div" textAlign={'center'} >
						{'Wiadomość: ' + message}
					</Typography>
				</Grid>
			</Card>
		</Grid>
	);
};

export default RecivedMessage;