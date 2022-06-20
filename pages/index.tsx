import { AppBar, Box, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import SearchIcon from '@mui/icons-material/Search';
import ButtonTextIcon from '../components/common/Button/ButtonTextIcon';
import Navbar from '../components/common/Navbar/Navbar';
import SearchComboBox from '../components/common/Box/SearchComboBox';
import TextFieldIcon from '../components/common/TextField/TextFieldIcon'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Head from 'next/head';
import ButtonCategory from '../components/common/Button/ButtonCategory';
import DirectionsCarFilledRoundedIcon from '@mui/icons-material/DirectionsCarFilledRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ImportantDevicesRoundedIcon from '@mui/icons-material/ImportantDevicesRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import { Areas } from '../components/Utils';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
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
			<style jsx global>{`
					body {
						background-image: ${"url('./backgroundExample.jpg')"};
					}
				`}
			</style>
			<Navbar jwtToken={jwtToken} id={id}/>
			<Box sx={{ flexGrow: 1, width: '75%', mx: 'auto', mt: '120px', backgroundColor: '#f2f4f5' }}>
				<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center'>
					<Grid item xs={11} sx={{ mt: '30px' }}>
						<AppBar
							elevation={0}
							sx={{ backgroundColor: '#FFF', position: 'inherit', border: 'solid 1px #f2f4f5', borderRadius: 1 }}
						>
							<Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
								<Grid item xs={12} sm={5} md={7}>
									{/* SearchBar */}
									<TextFieldIcon
										icon={<SearchIcon sx={{ color: '#002f34', ml: '3px' }} />}
										placeholder={'2 137 ogłoszeń blisko Ciebie'}
									/>
								</Grid>
								<Grid item xs={12} sm={4} md={3}>
									{/* Location Box */}
									<SearchComboBox
										startIcon={<FmdGoodOutlinedIcon sx={{ color: '#002f34' }} />}
										placeholder='Cała Polska'
										leftBorder={1}
										topBorder={1}
										options={Areas}
									/>
								</Grid>
								<Grid item xs={12} sm={3} md={2}>
									{/* SearchButton */}
									<ButtonTextIcon
										text={'Szukaj'}
										endIcon={<SearchIcon />}
										topBorder={1}
									/>
								</Grid>
							</Grid>
						</AppBar>
					</Grid>
				</Grid>
				{/* Main Categories Text */}
				<Grid item xs={12} mt={'30px'} sx={{ backgroundColor: '#fff' }} justifyContent='center'>
					<Typography variant='h4' component='h4' py={'50px'} textAlign='center' fontSize={'32px'} fontWeight={'500'} color='#002f34'>
						{'Kategorie główne'}
					</Typography>
				</Grid>
				{/* Categories */}
				<Grid item sx={{ backgroundColor: '#fff' }}>
					<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
						<Grid item xs={12} sm={6} md={3} sx={{ my: '30px', textAlign: 'center' }}>
							<ButtonCategory
								icon={<DirectionsCarFilledRoundedIcon fontSize='large' htmlColor='#676869' sx={{ mt: '10px' }} />}
								iconBackgroundColor={'#ffce32'}
								text={'Motoryzacja'}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={3} sx={{ my: '30px', textAlign: 'center' }}>
							<ButtonCategory
								icon={<ImportantDevicesRoundedIcon fontSize='large' htmlColor='#676869' sx={{ mt: '10px' }} />}
								iconBackgroundColor={'#ceddff'}
								text={'Elektronika'}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={3} sx={{ my: '30px', textAlign: 'center' }}>
							<ButtonCategory
								icon={<AssignmentIndRoundedIcon fontSize='large' htmlColor='#676869' sx={{ mt: '10px' }} />}
								iconBackgroundColor={'#23e5db'}
								text={'Praca'}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={3} sx={{ my: '30px', textAlign: 'center' }}>
							<ButtonCategory
								icon={<HomeRoundedIcon fontSize='large' htmlColor='#676869' sx={{ mt: '10px' }} />}
								iconBackgroundColor={'#ffd6c9'}
								text={'Dom'}
							/>
						</Grid>
					</Grid>
				</Grid>
				{/* Mapped Promoted? Advertisement */}
				<Grid item xs={12}>
					<Typography variant='h4' component='h4' py={'50px'} textAlign='center' fontSize={'32px'} fontWeight={'500'} color='#002f34'>
						{'Ogłoszenia promowane'}
					</Typography>
				</Grid>
				{/* About us */}
				<Grid item xs={12} sx={{ backgroundColor: '#002f34' }}>
					<Typography variant='h5' component='h5' pt={'50px'} textAlign='center' fontSize={'24px'} fontWeight={'500'} color='#7f9799'>
						{'Wyróżniaj swoje ogłoszenia!'}
					</Typography>
					<Typography variant='h4' component='h4' pb={'50px'} textAlign='center' fontSize={'28px'} fontWeight={'500'} color='#fff'>
						{'Znajdź czego szukasz na ZMITAC!'}
					</Typography>
				</Grid>
				<Grid item xs={12} sx={{ backgroundColor: '#cbf7ee' }}>
					<Typography variant='h5' component='h5' pt={'50px'} py={'20px'} textAlign='center' fontSize={'30px'} fontWeight={'500'} color='#002f34'>
						{'ZMITAC ©'}
					</Typography>
					<Typography variant='h4' component='h4' mx={'20%'} pb={'50px'} textAlign='center' fontSize={'16px'} fontWeight={'500'} color='#002f34'>
						{'ZMITAC.pl to darmowe ogłoszenia lokalne w kategoriach: Motoryzacja, Elektronika, Praca, Dom. Szybko znajdziesz tu ciekawe ogłoszenia i łatwo skontaktujesz się z ogłoszeniodawcą. Na ZMITAC.pl czeka na Ciebie praca biurowa, mieszkania, pokoje, samochody. Jeśli chcesz coś sprzedać - w prosty sposób dodasz bezpłatne ogłoszenia. Chcesz coś kupić - tutaj znajdziesz ciekawe okazje, taniej niż w sklepie. Sprzedawaj po sąsiedzku na ZMITAC.pl '}
					</Typography>
				</Grid>
				{/* Footer */}
				<Grid item xs={12} minHeight={'200px'}>

				</Grid>
			</Box>
		</div>
	)
}

export default Home
