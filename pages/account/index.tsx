import { Box, Button, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Navbar from '../../components/common/Navbar/Navbar'
import Head from 'next/head';
import { useRouter } from "next/router"
import Link from 'next/link';

const Profile: NextPage = () => {
	const router = useRouter();
	const {
		query: { id, jwtToken },
	} = router;

	return (
		<div>
			<Head>
				<title>{'Ogłoszenia - Sprzedam, kupię na ZMITAC.pl'}</title>
				<link rel='icon' href='./favicon.ico' />
			</Head>
			<Navbar jwtToken={jwtToken} id={id}/>
			<Box sx={{ flexGrow: 1, width: '100%', mx: 'auto', mt: '120px', backgroundColor: '#f2f4f5' }}>
				<Grid item xs={12} mt={'30px'} sx={{ backgroundColor: '#fff' }} justifyContent='center'>
					<Typography variant='h4' component='h4' py={'50px'} textAlign='center' fontSize={'32px'} fontWeight={'500'} color='#002f34'>
						{'Twój Olx'}
					</Typography>
				</Grid>
				<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center' sx={{py:'50px'}}>
					<Grid item xs={11} sm={5} md={2} sx={{backgroundColor: '#fff', m: '10px', pl: '0 !important'}}>
						<Link 
							href = {{pathname:'/account/messages', query: {jwtToken: jwtToken, id: id}}}
						>
							<Button
								fullWidth
								sx={{color:'#002f34', height: '100px'}}
							>
								{'Wiadomości'}
							</Button>
						</Link>
					</Grid>
					<Grid item xs={11} sm={5} md={2} sx={{backgroundColor: '#fff', m: '10px', pl: '0 !important'}}>
							<Link 
								href = {{pathname:'/account/announcements', query: {jwtToken: jwtToken, id: id}}}
							>
							<Button 
								fullWidth 
								sx={{color:'#002f34', height: '100px'}}
							>
								{'Ogłoszenia'}
							</Button>
						</Link>
					</Grid>
					<Grid item xs={11} sm={5} md={2} sx={{backgroundColor: '#fff', m: '10px', pl: '0 !important'}}>
						<Link 
							href = {{pathname:'/account/settings', query: {jwtToken: jwtToken, id: id}}}
						>
							<Button
								fullWidth
								sx={{color:'#002f34', height: '100px'}}
							>
								{'Ustawienia'}
							</Button>
						</Link>
					</Grid>
					<Grid item xs={11} sm={5} md={2} sx={{backgroundColor: '#fff', m: '10px', pl: '0 !important'}}>
						<Button
							href='/'
							fullWidth 
							sx={{color:'#002f34', height: '100px'}}
						>
							{'Wyloguj'}
					</Button>
					</Grid>
				</Grid>
			</Box>
		</div>
	)
}

export default Profile
