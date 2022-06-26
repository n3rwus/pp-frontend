import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import React from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Navbar from '../../components/common/Navbar/Navbar';
import { useRouter } from 'next/router';

interface iSettings {
	tokens ?: string;
}

const Settings = (props: iSettings) => {
	const router = useRouter();

	const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
	const id = typeof window !== 'undefined' ? localStorage.getItem('id') : null;

	const logout = () => {
		localStorage.setItem('token', '');
		localStorage.setItem('id', '');
	}

	return (
		<React.Fragment>
			<Navbar jwtToken={token} id={id}/>
			<Box sx={{ flexGrow: 1, width: '80%', mx: 'auto' }}>
				<Grid container spacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems='center' textAlign={'center'}>
					<Grid item xs={12}>
						<AccountCircleRoundedIcon sx={{fontSize: '150px', color: '#002f34', mt: '50px'}}/>
					</Grid>
					<Grid item xs={12}>
						<Typography component="h1" variant="h5" sx={{color: '#002f34'}}>
							{'Ustawienia'}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<hr style={{ color: '#002f34' }} />
					</Grid>
					<Grid item xs={12}>
						<Button  variant="contained" sx={{height: '56px', width: '330px', backgroundColor: '#002f34', ":hover": {backgroundColor: '#e0e0e0', color: '#002f34'}}}>
							{'Zresetuj hasło'}
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Button  variant="contained" sx={{height: '56px', width: '330px', backgroundColor: '#002f34', ":hover": {backgroundColor: '#e0e0e0', color: '#002f34'}}}>
							{'Usuń Konto'}
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Button href='/' onClick={logout} variant="contained" sx={{height: '56px', width: '330px', backgroundColor: '#002f34', ":hover": {backgroundColor: '#e0e0e0', color: '#002f34'}}}>
							{'Wyloguj'}
						</Button>
					</Grid>
				</Grid>
			</Box>
		</React.Fragment>
	);
};

export default Settings;