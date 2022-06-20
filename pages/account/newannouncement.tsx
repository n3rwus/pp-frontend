import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Navbar from '../../components/common/Navbar/Navbar'
import Head from 'next/head';
import TextFieldIcon from '../../components/common/TextField/TextFieldIcon';
import SearchComboBox from '../../components/common/Box/SearchComboBox';
import { OnlyAreas, OnlyCategories } from '../../components/Utils';
import ButtonUploadImage from '../../components/common/Button/ButtonUploadImage';
import React from 'react';
import CardUploadImage from '../../components/common/Cards/CardUploadImage';
import ButtonSave from '../../components/common/Button/ButtonSave';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter } from 'next/router';

const NewAnnouncement: NextPage = () => {
	const [images, setImages] = React.useState<FileList>();
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
			<Box sx={{ flexGrow: 1, width: '100%', mx: 'auto', mt: '60px', backgroundColor: '#f2f4f5' }}>
				<Grid item xs={12} mt={'30px'} sx={{ backgroundColor: '#fff' }} justifyContent='center'>
					<Typography variant='h4' component='h4' py={'50px'} textAlign='center' fontSize={'32px'} fontWeight={'500'} color='#002f34'>
						{'Nowe ogłoszenie'}
					</Typography>
				</Grid>
				<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center' sx={{py:'50px'}}>
					<Grid item xs={9} sm={10} md={5} sx={{backgroundColor: '#fff', m:'5px'}}>
						<TextFieldIcon
							placeholder={'Tytuł ogłoszenia'}
						/>
					</Grid>
					<Grid item xs={9} sm={10} md={5} sx={{backgroundColor: '#fff', m:'5px'}}>
						<TextFieldIcon
							placeholder={'Cena'}
						/>
					</Grid>
					<Grid item xs={9} sm={10} md={5} sx={{backgroundColor: '#fff', m:'5px'}}>
						<SearchComboBox
							placeholder='Katerogia'
							options={OnlyCategories}
							startIcon={<KeyboardArrowDownIcon sx={{ color: '#002f34'}} />}
						/>
					</Grid>
					<Grid item xs={9} sm={10} md={5} sx={{backgroundColor: '#fff', m:'5px'}}>
						<SearchComboBox
							placeholder='Lokalizacja'
							options={OnlyAreas}
							startIcon={<KeyboardArrowDownIcon sx={{ color: '#002f34'}} />}
						/>
					</Grid>
					<Grid item xs={9} sm={10} md={10} sx={{backgroundColor: '#fff', m:'15px'}}>
						<TextField
							fullWidth
							placeholder='Tutaj opisz swoje ogłoszenie'
							id='description'
							multiline
							minRows={5}
							variant='standard'
							InputLabelProps={{
								style: { color: '#002f34' },
							}}
							InputProps={{ disableUnderline: true }}
						/>
					</Grid>
					<Grid item xs={9} sm={10} md={10} sx={{backgroundColor: '#fff', m:'15px', p: '0px !important'}}>
						<ButtonUploadImage multiple={true} handleImages={setImages}/>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ flexGrow: 1, width: '100%', mx: 'auto', mt: '50px' }}>
				<Grid container spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
					{images && Array.from(images).map((image, index) => index < 8 ? 
						<CardUploadImage key={index} image={image} index={index} /> 
					:
						<Grid item xs={12} sm={12} md={12} sx={{backgroundColor: '#fff', m:'15px', p: '0px !important'}}>
							<Typography variant='h5' component='h4' py={'50px'} textAlign='center' fontSize={'28px'} fontWeight={'500'} color='#f54d5c'>
								{'Osiągnięto limit zdjęć'}
							</Typography>
							<hr style={{ margin: '30px' }} />
						</Grid>
					)}
					<Grid item xs={9} sm={10} md={10} sx={{mx: 'auto', mb:'50px', p: '0px !important'}}>
						<ButtonSave />
					</Grid>
				</Grid>
			</Box>
		</div>
	)
}

export default NewAnnouncement;