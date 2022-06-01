import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import React from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import Navbar from '../../components/common/Navbar/Navbar';

interface iSettings {
	token ?: string;
}

const Settings = (props: iSettings) => {
	const [email, changeEmail] = React.useState('');

	const {
		token,
	} = props;

	return (
		<React.Fragment>
			<Navbar
				token={token}
			/>
			<Box sx={{ flexGrow: 1, width: '80%', mx: 'auto' }}>
				<Grid container spacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems='center' textAlign={'center'}>
					<Grid item xs={12}>
						<AccountCircleRoundedIcon sx={{fontSize: '150px', color: '#002f34', mt: '50px'}}/>
					</Grid>
					<Grid item xs={12}>
						<Typography component="h1" variant="h5" sx={{color: '#002f34'}}>
							{'User\'s settings'}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<hr style={{ color: '#002f34' }} />
					</Grid>
					<Grid item xs={12} textAlign='center'>
						<FormControl variant="outlined" sx={{width: '330px'}}>
							<InputLabel>Email</InputLabel>
							<OutlinedInput
								disabled
								id="outlined-adornment-email"
								value={email}
								endAdornment={
								<InputAdornment position="end">
									<IconButton edge="end">
										<AlternateEmailRoundedIcon />
									</IconButton>
								</InputAdornment>
								}
								label="Email"
							/>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<Button  variant="contained" sx={{height: '56px', width: '330px', backgroundColor: '#002f34', ":hover": {backgroundColor: '#e0e0e0', color: '#002f34'}}}>
							{'Reset Password'}
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Button  variant="contained" sx={{height: '56px', width: '330px', backgroundColor: '#002f34', ":hover": {backgroundColor: '#e0e0e0', color: '#002f34'}}}>
							{'Delete Account'}
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Button href='/' variant="contained" sx={{height: '56px', width: '330px', backgroundColor: '#002f34', ":hover": {backgroundColor: '#e0e0e0', color: '#002f34'}}}>
							{'Logout'}
						</Button>
					</Grid>
				</Grid>
			</Box>
		</React.Fragment>
	);
};

export default Settings;