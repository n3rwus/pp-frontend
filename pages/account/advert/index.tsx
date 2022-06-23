import { Box, Button, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from "next/router"
import Link from 'next/link';
import Navbar from '../../../components/common/Navbar/Navbar';
import AdvertImage from '../../../components/common/Advert/AdvertImage';
import RecivedMessage from '../../../components/common/Message/RecivedMessage';

const UserAdvert: NextPage = () => {
	const router = useRouter();
	const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
	const id = typeof window !== 'undefined' ? localStorage.getItem('id') : null;

	return (
		<div>
			<Head>
				<title>{'Ogłoszenia - Sprzedam, kupię na ZMITAC.pl'}</title>
				<link rel='icon' href='./favicon.ico' />
			</Head>
			<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center' textAlign={'center'} sx={{mt: '200px'}}>
				<Grid item xs={12} sm={10} md={6} sx={{mb: '20px'}}>
					<AdvertImage
						id={id}
						jwtToken={token}
						advertId={1}
					/>
					<Typography variant='subtitle1' fontSize={'18px'} sx={{textAlign:'center', width: '90%', mx: 'auto'}}>
						{'Opis:'}
					</Typography>
					<Typography variant='body1' fontSize={'16px'} sx={{mb: '15px', textAlign:'left', width: '90%', mx: 'auto'}}>
						{'Sprzedam Passata Sprzedam Passata Sprzedam Passata Sprzedam Passata Sprzedam Passata Sprzedam Passata Sprzedam Passata Sprzedam Passata Sprzedam Passata Sprzedam Passata Sprzedam Passata Sprzedam Passata'}
					</Typography>
				</Grid>
				<Grid item xs={12} sm={10} md={3}>
					<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center' textAlign={'center'}>
						<Grid item xs={12}>
							<Typography variant='subtitle1' fontSize={'18px'} sx={{textAlign:'center', width: '90%', mx: 'auto'}}>
								{'Tytuł:'}
							</Typography>
							<Typography variant='subtitle1' fontSize={'18px'} sx={{mb: '10px', textAlign:'left', width: '90%', mx: 'auto'}}>
								{'Sprzedam Passata Sprzedam Passata Sprzedam'}
							</Typography>
							<hr style={{ width: '90%' }} />
							<Typography variant='subtitle2' fontSize={'16px'} sx={{mb: '10px', textAlign:'left', width: '90%', mx: 'auto'}}>
								{'Katergoria: Elektronika'}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='subtitle2' fontSize={'16px'} sx={{mb: '10px', textAlign:'left', width: '90%', mx: 'auto'}}>
								{'Województwo: Śląskie'}
							</Typography>
							<hr style={{ width: '90%' }} />
							<Typography variant='subtitle2' fontSize={'16px'} sx={{mb: '10px', textAlign:'left', width: '90%', mx: 'auto'}}>
								{'Wiadomości: 0'}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='subtitle2' fontSize={'16px'} sx={{mb: '10px', textAlign:'left', width: '90%', mx: 'auto'}}>
								{'Obserwowania: 0'}
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
								sx={{pb:'5px', mb:'15px', width: '90%', color: "#fff",  backgroundColor: "#002f34", border: '1px solid #fff', '&:hover':{color: "#002f34", backgroundColor: "#f2f4f5", border: '1px solid #002f34'}}}
							>
								{'Edytuj ogłoszenie'}
							</Button>
						</Grid>
						<Grid item xs={12}>
							<Button
								sx={{pb:'5px', mb:'15px', width: '90%', color: "#fff",  backgroundColor: "#002f34", border: '1px solid #fff', '&:hover':{color: "#002f34", backgroundColor: "#f2f4f5", border: '1px solid #002f34'}}}
							>
								{'Usuń ogłoszenie'}
							</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={10}>
					<hr style={{ width: '90%', marginBottom: '15px' }}/>
					<Typography variant='subtitle1' fontSize={'20px'} sx={{mb:'20px', textAlign:'center', width: '90%', mx: 'auto'}}>
								{'Wiadomości:'}
					</Typography>
				</Grid>
			</Grid>
			<Box sx={{ flexGrow: 1, width: '100%', mx: 'auto', backgroundColor: '#fff' }}>
				<Grid item xs={5} mt={'30px'} sx={{ backgroundColor: '#fff' }} justifyContent='center'>
					<RecivedMessage
						advertId=''
						advertTitle=''
						senderId=''
						senderUsername=''
						messageId=''
						message=''
					/>
					<hr style={{ width: '50%', marginBottom: '15px' }}/>
				</Grid>
				<Grid item xs={5} mt={'30px'} sx={{ backgroundColor: '#fff' }} justifyContent='center'>
					<RecivedMessage
						advertId=''
						advertTitle=''
						senderId=''
						senderUsername=''
						messageId=''
						message=''
					/>
				</Grid>
			</Box>
			<Navbar jwtToken={token} id={id}/>
		</div>
	)
}

export default UserAdvert;