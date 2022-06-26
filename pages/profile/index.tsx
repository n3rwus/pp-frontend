import { AppBar, Box, Button, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../../components/common/Navbar/Navbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SimplyAdvert from '../../components/common/Advert/SimplyAdvert';
import { useEffect, useState } from 'react';
import { iProfile, ProfileDataProvider } from '../../data/ProfileDataProvider';
import React from 'react';

const Home: NextPage = () => {
	const router = useRouter();

	const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
	const id = typeof window !== 'undefined' ? localStorage.getItem('id') : null;

	const profileId = router.query.senderId;

	const [profile, setProfile] = React.useState<iProfile>({
		id: profileId as string ?? '',
		username: '',
		firstName: '',
		lastName: '',
		adverts: [],
	});

	useEffect(() => {
		loadProfile();
	}, []);

	const loadProfile = () => {
		ProfileDataProvider.getUserProfile(profileId as string)
		.then(res => {
			if (typeof res === typeof profile) {
				setProfile(res as iProfile);
			}
		});
	}

	const renderSimplyAdverts =  profile.adverts ? profile.adverts.map((advert, index) => (
		<Grid item xs={12} sm={6} md={4} sx={{my: '20px'}}>
			<SimplyAdvert
				key={index}
				advertId={advert.advertId}
				title={advert.title}
				price={advert.price}
				image={advert.image}
				path={'/advert/'}
			/>
		</Grid>
		)) :
			{};

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
						{profile.username} 
					</Typography>
					</Grid>
					<Grid item xs={12}>
					<Typography fontSize={'20px'} sx={{textAlign:'center'}}>
						{profile.firstName} 
					</Typography>
					</Grid>
					<Grid item xs={12}>
					<Typography fontSize={'20px'} sx={{textAlign:'center'}}>
						{profile.lastName} 
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
			<Box sx={{ flexGrow: 1, width: '80%', mx: 'auto', backgroundColor: '#fff' }}>
				<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{pt:'50px'}}>
					{renderSimplyAdverts}
				</Grid>
			</Box>
		</div>
	)
}

export default Home
