import React, { useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from "next/router"
import Link from 'next/link';
import Navbar from '../../../components/common/Navbar/Navbar';
import AdvertImage from '../../../components/common/Advert/AdvertImage';
import RecivedMessage from '../../../components/common/Message/RecivedMessage';
import { AdvertDataProvider, iAdvert } from '../../../data/AdvertDataProvider';
import DeleteModal from '../../../components/common/Modal/DeleteModal';
import { getAreaName, getCategoryName } from '../../../components/Utils';
import Loader from '../../../components/common/Loader/Loader';

const UserAdvert: NextPage = () => {
	const router = useRouter()
	const advertId: string = router.query.advertId as string;

	const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
	const id = typeof window !== 'undefined' ? localStorage.getItem('id') : null;

	const [loader, setLoader] = React.useState(true);

	const [advert, setAdvert] = React.useState<iAdvert>({
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

	const [deleteModal, setDeleteModal] = React.useState(false);

	useEffect(() => {
		getAdvert();
	}, []);

	const getAdvert = () => {
		return AdvertDataProvider.getUserAdvert(token!, id!, advertId)
		.then((res) => {
			if (typeof res === typeof advert) {
				setAdvert(res as iAdvert);
				setLoader(false);
			}
		})
	}

	const editAdvert = () => {
		router.push({
			pathname: '/account/advert/edit/', 
			query: {advertId},
		});
	}

	const deleteAdvert = () => {
		return AdvertDataProvider.deleteAdvert(token!, advertId);
	}

	const renderMessages = ( advert.advertMessages !== undefined ?
		advert.advertMessages.map(message => (
			<Grid item xs={5} mt={'30px'} sx={{ backgroundColor: '#fff' }} justifyContent='center'>
				<RecivedMessage
					advertId={message.advertId}
					advertTitle={message.advertTitle}
					senderId={message.senderId}
					senderUsername={message.senderUsername}
					messageId={message.messageId}
					message={message.message}
					date={message.date}
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
							<hr style={{ width: '90%' }} />
						</Grid>
						<Grid item xs={12}>
							<Typography variant='subtitle2' fontSize={'16px'} sx={{mb: '10px', textAlign:'left', width: '90%', mx: 'auto'}}>
								{'Wiadomości: ' + advert.messagesNumber ?? 0}
							</Typography>
							<Typography variant='subtitle2' fontSize={'16px'} sx={{mb: '10px', textAlign:'left', width: '90%', mx: 'auto'}}>
								{'Obserwowania: ' + advert.followNumber ?? 0}
							</Typography>
							<hr style={{ width: '90%', marginBottom: '15px' }} />
						</Grid>
						<Grid item xs={12}>
							<Button
								sx={{pb:'5px', mb:'15px', width: '90%', color: "#fff",  backgroundColor: "#002f34", border: '1px solid #fff', '&:hover':{color: "#002f34", backgroundColor: "#f2f4f5", border: '1px solid #002f34'}}}
							>
								{'Idź do ogłoszenia'}
							</Button>
						</Grid>
						<Grid item xs={12}>
							<Button
								onClick={editAdvert}
								sx={{pb:'5px', mb:'15px', width: '90%', color: "#fff",  backgroundColor: "#002f34", border: '1px solid #fff', '&:hover':{color: "#002f34", backgroundColor: "#f2f4f5", border: '1px solid #002f34'}}}
							>
								{'Edytuj ogłoszenie'}
							</Button>
						</Grid>
						<Grid item xs={12}>
							<Button
								onClick={() => setDeleteModal(true)}
								sx={{pb:'5px', mb:'15px', width: '90%', color: "#fff",  backgroundColor: "#002f34", border: '1px solid #fff', '&:hover':{color: "#002f34", backgroundColor: "#f2f4f5", border: '1px solid #002f34'}}}
							>
								{'Usuń ogłoszenie'}
							</Button>
						</Grid>
					</Grid>
				</Grid>
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
			<DeleteModal
				isModal={deleteModal}
				url={'/account/announcements'}
				modalOnChange={setDeleteModal}
				onDeleteClick={deleteAdvert}
				warningText={'Czy na pewno chcesz usunąć ogłoszenie?'}
				deleteText={'Tak, usuń ogłoszenie'}
			/>
		</div>
	)
}

export default UserAdvert;