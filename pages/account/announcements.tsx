import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Navbar from '../../components/common/Navbar/Navbar'
import Head from 'next/head';
import TextFieldIcon from '../../components/common/TextField/TextFieldIcon';
import SearchComboBox from '../../components/common/Box/SearchComboBox';
import ButtonTextIcon from '../../components/common/Button/ButtonTextIcon';
import { Categories, Sorting } from '../../components/Utils';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter } from 'next/router';
import { AdvertDataProvider, iSimplyAdvert } from '../../data/AdvertDataProvider';
import SimplyAdvert from '../../components/common/Advert/SimplyAdvert';

const Announcements: NextPage = () => {
	const router = useRouter();

	const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
	const id = typeof window !== 'undefined' ? localStorage.getItem('id') : null;

	const [advertTitle, setAdvertTitle] = React.useState('');
	const [category, setCategory] = React.useState('');
	const [sorting, setSorting] = React.useState('');
	const [simplyAdverts, setSimplyAdverts] = React.useState<iSimplyAdvert[]>([]);

	useEffect(() => {
		loadSimplyAdverts();
	}, []);
 
	const loadSimplyAdverts = () => {
		return AdvertDataProvider.getUserAdverts(token!, id!)
		.then(loadedAdverts => {
			if (typeof loadedAdverts === typeof simplyAdverts) {
				console.log('dUPA1');
				setSimplyAdverts(loadedAdverts as iSimplyAdvert[]);
			}
		});
	}

	const renderSimplyAdverts = (simplyAdverts.map(advert => (
		<Grid item xs={12} sm={6} md={4} sx={{my: '20px'}}>
			<SimplyAdvert
				advertId={advert.advertId}
				title={advert.title}
				price={advert.price}
				image={advert.image}
			/>
		</Grid>
	)));

	return (
		<div>
			<Head>
				<title>{'Ogłoszenia - Sprzedam, kupię na ZMITAC.pl'}</title>
				<link rel='icon' href='./favicon.ico' />
			</Head>
			<Navbar jwtToken={token} id={id}/>
			<Box sx={{ flexGrow: 1, width: '100%', mx: 'auto', mt: '120px', backgroundColor: '#f2f4f5' }}>
				<Grid item xs={12} mt={'30px'} sx={{ backgroundColor: '#fff' }} justifyContent='center'>
					<Typography variant='h4' component='h4' py={'50px'} textAlign='center' fontSize={'32px'} fontWeight={'500'} color='#002f34'>
						{'Twoje Ogłoszenia'}
					</Typography>
					<hr />
				</Grid>
			</Box>
			<Box sx={{ flexGrow: 1, width: '80%', mx: 'auto', backgroundColor: '#fff' }}>
				<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{pt:'50px'}}>
						{renderSimplyAdverts}
					<Grid item xs={12} minHeight={'200px'}>
					</Grid>
				</Grid>
			</Box>
		</div>
	)
}

export default Announcements;

/*
<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center' sx={{pt:'50px'}}>
					<Grid item xs={9} sm={10} md={3} sx={{backgroundColor: '#fff', m:'5px'}}>
						<TextFieldIcon
							icon={<SearchIcon sx={{ color: '#002f34'}} />}
							placeholder={'Tytuł ogłoszenia'}
							value={advertTitle}
							onChange={setAdvertTitle}
						/>
					</Grid>
					<Grid item xs={9} sm={10} md={3} sx={{backgroundColor: '#fff', m:'5px'}}>
						<SearchComboBox
							startIcon={<KeyboardArrowDownIcon sx={{ color: '#002f34'}} />}
							placeholder='Kategorie'
							options={Categories}
							onChange={setCategory}
						/>
					</Grid>
					<Grid item xs={9} sm={10} md={3} sx={{backgroundColor: '#fff', m:'5px'}}>
						<SearchComboBox
							startIcon={<KeyboardArrowDownIcon sx={{ color: '#002f34'}} />}
							placeholder='Sortowanie'
							options={Sorting}
							onChange={setSorting}
						/>
					</Grid>
					<Grid item xs={6} sm={8} md={12} sx={{ m:'5px'}}>
						<ButtonTextIcon
							text={'Szukaj'}
							endIcon={<SearchIcon />}
							topBorder={1}
						/>
					</Grid>
					<Grid item xs={12} sx={{ m:'5px'}}>
						<hr />
					</Grid>
				</Grid>
*/