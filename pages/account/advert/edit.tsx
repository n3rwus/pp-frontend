import { Box, Grid, TextField, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Navbar from '../../../components/common/Navbar/Navbar'
import Head from 'next/head';
import TextFieldIcon from '../../../components/common/TextField/TextFieldIcon';
import SearchComboBox from '../../../components/common/Box/SearchComboBox';
import { Areas, arrayBufferToBase64, Categories, createFile, getAreaKey, getAreaName, getCategoryKey, getCategoryName } from '../../../components/Utils';
import ButtonUploadImage from '../../../components/common/Button/ButtonUploadImage';
import React, { useEffect } from 'react';
import CardUploadImage from '../../../components/common/Cards/CardUploadImage';
import ButtonSave from '../../../components/common/Button/ButtonSave';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter } from 'next/router';
import { AdvertDataProvider, iAdvert, NewAdvert } from '../../../data/AdvertDataProvider';
import BasicModal from '../../../components/common/Modal/BasicModal';
import { regexEmail, regexEmpty, regexPhoneNumber, regexPrice } from '../../../components/Utils';
import Loader from '../../../components/common/Loader/Loader';

const EditAdvert: NextPage = () => {
	const router = useRouter();

	//localStorage
	const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
	const id = typeof window !== 'undefined' ? localStorage.getItem('id') : null;

	const advertId = router.query.advertId as string;

	const LoadAdvert = () => {
		return AdvertDataProvider.getUserAdvertEdit(token!, id!, advertId)
		.then((advert) => {
			let editedAdvert: iAdvert = {
				title: '',
				description: '',
				email: '',
				phoneNumber: '',
				price: '',
				image: '',
				category: '',
				area: '',
			}

			if (typeof advert === typeof editedAdvert) {
				editedAdvert = advert as iAdvert;

				setTitle(editedAdvert.title ?? '');
				setPrice(editedAdvert.price ?? '');
				setEmail(editedAdvert.email ?? '');
				setPhoneNumber(editedAdvert.phoneNumber ?? '');
				setCategory(editedAdvert.category ? getCategoryName(parseInt(editedAdvert.category)) : '');
				setLocation(editedAdvert.area ? getAreaName(parseInt(editedAdvert.area)) : '');
				setDescription(editedAdvert.description ?? '');
				setImage(editedAdvert.image ?  createFile(editedAdvert.image) : undefined);
				setLoader(false);
			}
		});
	}

	useEffect(() => {
		LoadAdvert();
	}, []);

	//states
	const [title, setTitle] = React.useState('');
	const [price, setPrice] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [phoneNumber, setPhoneNumber] = React.useState('');
	const [category, setCategory] = React.useState('');
	const [location, setLocation] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [image, setImage] = React.useState<File>();

	// modal
	const [isModal, setModal] = React.useState(false);

	// loader
	const [loader, setLoader] = React.useState(true);

	// status
	const [status, setStatus] = React.useState(0);

	// errors
	const [titleError, setTitleError] = React.useState(true);
	const [priceError, setPriceError] = React.useState(true);
	const [descriptionError, setDescriptionError] = React.useState(true);
	const [emailError, setEmailError] = React.useState(false);
	const [phoneNumberError, setPhoneNumberError] = React.useState(false);

	// validation
	useEffect(() => {
		setTitleError(!regexEmpty.test(title));
	}, [title]);

	useEffect(() => {
		setPriceError(!regexPrice.test(price));
	}, [price]);

	useEffect(() => {
		setDescriptionError(!regexEmpty.test(description));
	}, [description]);

	useEffect(() => {
		setEmailError(!regexEmail.test(email));
	}, [email]);

	useEffect(() => {
		setPhoneNumberError(!regexPhoneNumber.test(phoneNumber));
	}, [phoneNumber]);

	// functions
	const imageToArrayBuffer = async () => {
		if(image) {
			return arrayBufferToBase64(await image.arrayBuffer()); 
		} else {
			return '';
		}
	}

	//

	const onSaveClick = () => {

		const advertData: NewAdvert = {
			jwtToken: token!,
			title: title,
			price: parseInt(price),
			description: description,
			email: email,
			phoneNumber: phoneNumber,
			category: getCategoryKey(category),
			area: getAreaKey(location),
		}
	
		return imageToArrayBuffer()
		.then(image => {
			advertData.image = image;
			console.log('Advert data: ' + advertData);
			return AdvertDataProvider.editAdvert(advertData, advertId)
			.then(res => {
				console.log('Add advert status: [' + res + ']');
				setModal(true);
				setStatus(res);
			});
		}) 
	}

	return  loader ? (
		<div>
			<Head>
				<title>{'Ogłoszenia - Sprzedam, kupię na ZMITAC.pl'}</title>
				<link rel='icon' href='./favicon.ico' />
			</Head>
			<Navbar jwtToken={token} id={id}/>
			<Loader/>
		</div>
	) : (
		<div>
			<Head>
				<title>{'Ogłoszenia - Sprzedam, kupię na ZMITAC.pl'}</title>
				<link rel='icon' href='./favicon.ico' />
			</Head>
			<Navbar jwtToken={token} id={id}/>
			<Box sx={{ flexGrow: 1, width: '100%', mx: 'auto', mt: '60px', backgroundColor: '#f2f4f5' }}>
				<Grid item xs={12} mt={'30px'} sx={{ backgroundColor: '#fff' }} justifyContent='center'>
					<Typography 
						variant='h4'
						component='h4'
						py={'50px'}
						textAlign='center'
						fontSize={'32px'}
						fontWeight={'500'}
						color={'#002f34'}
					>
						{'Edycja ogłoszenia'}
					</Typography>
				</Grid>
				<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center' sx={{py:'50px'}}>
					<Grid item xs={9} sm={10} md={5} sx={{backgroundColor: '#fff', m:'5px'}}>
						<TextFieldIcon
							placeholder={'Tytuł ogłoszenia'}
							value={title}
							onChange={setTitle}
							error={titleError}
						/>
					</Grid>
					<Grid item xs={9} sm={10} md={5} sx={{backgroundColor: '#fff', m:'5px'}}>
						<TextFieldIcon
							placeholder={'Cena'}
							value={price}
							onChange={setPrice}
							error={priceError}
						/>
					</Grid>
					<Grid item xs={9} sm={10} md={5} sx={{backgroundColor: '#fff', m:'5px'}}>
						<TextFieldIcon
							placeholder={'E-mail'}
							value={email}
							onChange={setEmail}
							error={emailError}
						/>
					</Grid>
					<Grid item xs={9} sm={10} md={5} sx={{backgroundColor: '#fff', m:'5px'}}>
						<TextFieldIcon
							placeholder={'Numer telefonu'}
							value={phoneNumber}
							onChange={setPhoneNumber}
							error={phoneNumberError}
						/>
					</Grid>
					<Grid item xs={9} sm={10} md={5} sx={{backgroundColor: '#fff', m:'5px'}}>
						<SearchComboBox
							value={category}
							onChange={setCategory}
							placeholder='Katerogia'
							options={Categories}
							startIcon={<KeyboardArrowDownIcon sx={{ color: '#002f34'}} />}
						/>
					</Grid>
					<Grid item xs={9} sm={10} md={5} sx={{backgroundColor: '#fff', m:'5px'}}>
						<SearchComboBox
							value={location}
							onChange={setLocation}
							placeholder='Lokalizacja'
							options={Areas}
							startIcon={<KeyboardArrowDownIcon sx={{ color: '#002f34'}} />}
						/>
					</Grid>
					<Grid item xs={9} sm={10} md={10} sx={{backgroundColor: '#fff', m:'15px'}}>
						<TextField
							fullWidth
							placeholder='Tutaj opisz swoje ogłoszenie'
							value={description}
							onChange={e => setDescription(e.target.value)}
							id='description'
							error={descriptionError}
							color={'error'}
							multiline
							minRows={5}
							variant='standard'
							InputLabelProps={{
								style: { color: '#002f34' },
							}}
							InputProps={{ disableUnderline: !descriptionError }}
						/>
					</Grid>
					<Grid item xs={9} sm={10} md={10} sx={{backgroundColor: '#fff', m:'15px', p: '0px !important'}}>
						<ButtonUploadImage multiple={true} handleImages={setImage as React.Dispatch<React.SetStateAction<File | undefined>>}/>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ flexGrow: 1, width: '100%', mx: 'auto', mt: '50px' }}>
				<Grid container spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
					{image &&
						<CardUploadImage image={image}/> 
					}
					<Grid item xs={9} sm={10} md={10} sx={{mx: 'auto', mb:'50px', p: '0px !important'}}>
						<ButtonSave
							onSaveClick={onSaveClick}
							disabled={titleError || priceError || descriptionError || emailError || phoneNumberError}
						 />
					</Grid>
				</Grid>
			</Box>
			<BasicModal
				url={status === 200 ? '/account/announcements' : ''}
				isModal={isModal}
				modalOnChange={setModal}
				status={status}
				successText={'Advert successfully updated'}
				errorText={'An error occured'}
				closeText={status === 200 ? 'Idź do swoich ogłoszeń' : 'Wróć'}
			/>
		</div>
	)
}

export default EditAdvert;