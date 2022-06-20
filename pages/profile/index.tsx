import { AppBar, Box, Button, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../../components/common/Navbar/Navbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Home: NextPage = () => {
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
			<Box sx={{ flexGrow: 1, width: '90%', mx: 'auto', mt: '120px' }}>
				<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems='center' justifyItems={'center'} justifyContent={'center'}>
					<Grid item>
						<AccountCircleIcon sx={{color:'#000', width: '100px', height: '100px'}}> </AccountCircleIcon>
					</Grid>
					<Grid item xs={12}>
					<Typography fontSize={'30px'} sx={{textAlign:'center'}}>
						{'MiłośnikPassatów123'} 
					</Typography>
					</Grid>
					<Grid item xs={12}>
					<Typography fontSize={'20px'} sx={{textAlign:'center'}}>
						{'Janusz'} 
					</Typography>
					</Grid>
					<Grid item xs={12}>
					<Typography fontSize={'20px'} sx={{textAlign:'center'}}>
						{'Kowalski'} 
					</Typography>
					</Grid>
					<Grid item xs={12} marginTop={'100px'}>
						<Typography fontSize={'32px'} sx={{textAlign:'center'}}>
							{'Ogłoszenia'} 
						</Typography>
						<hr/>
					</Grid>
				</Grid>
			</Box>
		</div>
	)
}

export default Home
