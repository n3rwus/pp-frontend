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

const Announcements: NextPage = () => {
	return (
		<div>
			<Head>
				<title>{'Ogłoszenia - Sprzedam, kupię na ZMITAC.pl'}</title>
				<link rel='icon' href='./favicon.ico' />
			</Head>
			<Navbar />
			<Box sx={{ flexGrow: 1, width: '100%', mx: 'auto', mt: '120px', backgroundColor: '#f2f4f5' }}>
				<Grid item xs={12} mt={'30px'} sx={{ backgroundColor: '#fff' }} justifyContent='center'>
					<Typography variant='h4' component='h4' py={'50px'} textAlign='center' fontSize={'32px'} fontWeight={'500'} color='#002f34'>
						{'Twoje Ogłoszenia'}
					</Typography>
				</Grid>
				<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center' sx={{pt:'50px'}}>
					<Grid item xs={9} sm={10} md={3} sx={{backgroundColor: '#fff', m:'5px'}}>
						<TextFieldIcon
						icon={<SearchIcon sx={{ color: '#002f34'}} />}
						placeholder={'Tytuł ogłoszenia'}
						/>
					</Grid>
					<Grid item xs={9} sm={10} md={3} sx={{backgroundColor: '#fff', m:'5px'}}>
						<SearchComboBox
						startIcon={<KeyboardArrowDownIcon sx={{ color: '#002f34'}} />}
						placeholder='Kategorie'
						options={Categories}
						/>
					</Grid>
					<Grid item xs={9} sm={10} md={3} sx={{backgroundColor: '#fff', m:'5px'}}>
						<SearchComboBox
						startIcon={<KeyboardArrowDownIcon sx={{ color: '#002f34'}} />}
						placeholder='Sortowanie'
						options={Sorting}
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
					<Grid item xs={12} minHeight={'200px'}>
					</Grid>
				</Grid>
			</Box>
		</div>
	)
}

export default Announcements;