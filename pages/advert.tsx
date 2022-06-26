import React, { useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from "next/router"
import Link from 'next/link';
import Navbar from '../components/common/Navbar/Navbar';
import AdvertImage from '../components/common/Advert/AdvertImage';
import RecivedMessage from '../components/common/Message/RecivedMessage';
import { AdvertDataProvider, iAdvert } from '../data/AdvertDataProvider';
import { getAreaName, getCategoryName, regexEmpty } from '../components/Utils';
import Loader from '../components/common/Loader/Loader';
import TextFieldIcon from '../components/common/TextField/TextFieldIcon';
import ButtonSave from '../components/common/Button/ButtonSave';
import { MessageDataProvider } from '../data/MessageDataProvider';
import BasicModal from '../components/common/Modal/BasicModal';
import AddModal from '../components/common/Modal/AddModal';

const Advert: NextPage = () => {
	const router = useRouter();

	const advertId: string = router.query.advertId as string;

	const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
	const id = typeof window !== 'undefined' ? localStorage.getItem('id') : null;

	const [loader, setLoader] = React.useState(true);
	const [modal, setModal] = React.useState(false);
	const [newMessage, setNewMessage] = React.useState('');
	const [advert, setAdvert] = React.useState<iAdvert>({
		userId: '',
		title: '',
		description: '',
		email: '',
		phoneNumber: '',
		price: '',
		category: '',
		area: '',
		messagesNumber: '',
		followNumber: '',
		image: '',
		advertMessages: [],
	});

	useEffect(() => {
		getAdvert();
	}, []);

	// errors
	const [newMessageError, setNewMessageError] = React.useState(true);

	// validation
	useEffect(() => {
		setNewMessageError(!regexEmpty.test(newMessage));
	}, [newMessage]);

	const getAdvert = () => {
		return AdvertDataProvider.getUserAdvert(token!, id!, advertId)
		.then((res) => {
			if (typeof res === typeof advert) {
				setAdvert(res as iAdvert);
				setLoader(false);
			}
		})
	}

	const sendMessage = () => {
		return MessageDataProvider.createMessage(id!, token!, advert.userId!, newMessage!, advertId!);
	}

	const renderMessages = ( advert.advertMessages !== undefined ?
		advert.advertMessages.map((message, index) => (
			<Grid item xs={6} mt={'30px'} sx={{ backgroundColor: '#fff' }} justifyContent='center'>
				<RecivedMessage
					key={index}
					advertId={message.advertId}
					advertTitle={message.advertTitle}
					senderId={message.senderId}
					senderUsername={message.senderUsername}
					messageId={message.messageId}
					message={message.message}
					date={message.date}
					renderDefaultText={false}
				/>
			</Grid>
		)) :
			{}
	);

	return loader ? (
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
			<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center' textAlign={'center'} sx={{mt: '200px'}}>
				<Grid item xs={12} sm={10} md={6} sx={{mb: '20px'}}>
					<AdvertImage
						id={id}
						jwtToken={token}
						advertId={1}
						image={advert.image}
					/>
					<Typography variant='subtitle1' fontSize={'18px'} sx={{textAlign:'center', width: '90%', mx: 'auto'}}>
						{'Opis:'}
					</Typography>
					<Typography variant='body1' fontSize={'16px'} sx={{mb: '15px', textAlign:'left', width: '90%', mx: 'auto'}}>
						{advert.description}
					</Typography>
				</Grid>
				<Grid item xs={12} sm={10} md={3}>
					<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center' textAlign={'center'}>
						<Grid item xs={12}>
							<Typography variant='subtitle1' fontSize={'18px'} sx={{textAlign:'center', width: '90%', mx: 'auto'}}>
								{'Tytuł:'}
							</Typography>
							<Typography variant='subtitle1' fontSize={'18px'} sx={{mb: '10px', textAlign:'left', width: '90%', mx: 'auto'}}>
								{advert.title}
							</Typography>
							<hr style={{ width: '90%' }} />
						</Grid>
						<Grid item xs={12}>
							<Typography variant='subtitle2' fontSize={'16px'} sx={{mb: '10px', textAlign:'left', width: '90%', mx: 'auto'}}>
								{'Województwo: ' + getAreaName(parseInt(advert.area!))}
							</Typography>
							<Typography variant='subtitle2' fontSize={'16px'} sx={{mb: '10px', textAlign:'left', width: '90%', mx: 'auto'}}>
								{'Katergoria: ' + getCategoryName(parseInt(advert.category!))}
							</Typography>
							{advert.email &&
								<Typography variant='subtitle2' fontSize={'16px'} sx={{mb: '10px', textAlign:'left', width: '90%', mx: 'auto'}}>
									{'Adres Email: ' + advert.email}
								</Typography>
							}
							{advert.phoneNumber &&
								<Typography variant='subtitle2' fontSize={'16px'} sx={{mb: '10px', textAlign:'left', width: '90%', mx: 'auto'}}>
									{'Number Telefonu: ' + advert.phoneNumber}
								</Typography>
							}
						</Grid>
					</Grid>
				</Grid>
				{token && id &&
					<Grid item xs={12} sm={10}>
						<hr style={{ width: '90%', marginBottom: '15px' }}/>
					</Grid>
				}
				{token && id &&
					<Grid item xs={10} sm={4}>
						<TextFieldIcon
							placeholder={'Tu napisz wiadomość...'}
							value={newMessage}
							onChange={setNewMessage}
							error={false}
						/>
					</Grid>
				}
				{token && id &&
					<Grid item xs={10} sm={4}>
						<Button
							onClick={() => setModal(true)}
							disabled={newMessageError}
							sx={{pb:'5px', my:'15px', mx: 'auto', width: '90%', color: "#000",  backgroundColor: "#f2f4f5", border: '1px solid #fff', '&:hover':{color: "#fff", backgroundColor: "#002f34", border: '1px solid #002f34'}}}
						>
							{'Wyślij Wiadomość'}
						</Button>
					</Grid>
				}
				<Grid item xs={12} sm={10}>
					<hr style={{ width: '90%', marginBottom: '15px' }}/>
					{advert.advertMessages !== undefined && advert.advertMessages.length > 0 &&
						<Typography variant='subtitle1' fontSize={'20px'} sx={{mb:'20px', textAlign:'center', width: '90%', mx: 'auto'}}>
									{'Wiadomości:'}
						</Typography>
					}
				</Grid>
			</Grid>
			<Box sx={{ flexGrow: 1, width: '100%', mx: 'auto', backgroundColor: '#fff' }}>
				{renderMessages}
			</Box>
			<AddModal
				isModal={modal}
				onAddClick={sendMessage}
				modalOnChange={setModal}
				url={'/loading'}
				queryText={'advertId'}
				queryValue={advertId}
				warningText={'Czy na pewno chcesz wysłać wiadomość?'}
				addText={'Tak, na pewno'}
			/>
		</div>
	)
}

export default Advert;