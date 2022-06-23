import { Box, Button, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Navbar from '../../components/common/Navbar/Navbar'
import Head from 'next/head';
import { useRouter } from "next/router"
import RecivedMessage from '../../components/common/Message/RecivedMessage';

const Messages: NextPage = () => {
	const router = useRouter();
	const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
	const id = typeof window !== 'undefined' ? localStorage.getItem('id') : null;

	return (
		<div>
			<Head>
				<title>{'Ogłoszenia - Sprzedam, kupię na ZMITAC.pl'}</title>
				<link rel='icon' href='./favicon.ico' />
			</Head>
			<Navbar jwtToken={token} id={id}/>
			<Box sx={{ flexGrow: 1, width: '100%', mx: 'auto', mt: '120px', backgroundColor: '#fff' }}>
				<Grid item xs={12} mt={'30px'} sx={{ backgroundColor: '#fff' }} justifyContent='center'>
					<Typography variant='h4' component='h4' py={'50px'} textAlign='center' fontSize={'32px'} fontWeight={'500'} color='#002f34'>
						{'Twoje Wiadomości'}
					</Typography>
				</Grid>
				<Grid item xs={5} mt={'30px'} sx={{ backgroundColor: '#fff' }} justifyContent='center'>
					<RecivedMessage
						advertId=''
						advertTitle=''
						senderId=''
						senderUsername=''
						messageId=''
						message=''
						renderAdvert={true}
					/>
				</Grid>
				<Grid item xs={5} mt={'30px'} sx={{ backgroundColor: '#fff' }} justifyContent='center'>
					<RecivedMessage
						advertId=''
						advertTitle=''
						senderId=''
						senderUsername=''
						messageId=''
						message=''
						renderAdvert={true}
					/>
				</Grid>
				<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center' sx={{py:'50px'}}>

				</Grid>
			</Box>
		</div>
	)
}

export default Messages