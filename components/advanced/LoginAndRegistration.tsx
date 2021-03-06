import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthenticationDataProvider } from '../../data/AuthenticationDataProvider';
import { useRouter } from "next/router"
interface ITabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: ITabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
	<div
		role='tabpanel'
		hidden={value !== index}
		id={`simple-tabpanel-${index}`}
		aria-labelledby={`simple-tab-${index}`}
		{...other}
	>
		{value === index && (
		<Box sx={{ p: 3 }}>
			<Typography>{children}</Typography>
		</Box>
		)}
	</div>
	);
}

function a11yProps(index: number) {
	return {
	id: `simple-tab-${index}`,
	'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function LoginAndRegistration() {
	const router = useRouter();
	
	const [value, setValue] = React.useState(0);
	const [status, setStatus] = React.useState<number | undefined>();
 
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [username, setUsername] = React.useState("");

	const [jwtToken, setJwtToken] = React.useState<string | undefined>();
	const [id, setId] = React.useState<string | undefined>();
	const [refreshToken, setRefreshToken] = React.useState<string | undefined>();

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
		setStatus(0);
	};

	const handleSignIn = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		event.preventDefault();
		return AuthenticationDataProvider.singIn(username, password)
		.then(res => {
			console.log(res);
			if (res.jwtToken && res.id) {
				localStorage.setItem('token', res.jwtToken);
				localStorage.setItem('id', res.id);
				router.push({
					pathname: '/account',
				});
			} else {
				if(res.error !== 0) {
					setStatus(res.error);
				}
			}
			const cookieValue = document.cookie;
			console.log(cookieValue);
		});
	};

	const handleRegister = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		event.preventDefault();
		return AuthenticationDataProvider.register(email, password, firstName, lastName, username)
		.then(res => {
			console.log(res);
			setStatus(res);
		});
	}

	return (
	<Box sx={{ width: '25%', minWidth: '300px', mx: 'auto', mt: '120px', bgcolor: 'background.paper', borderRadius: '5px' }}>
		<Box sx={{ borderBottom: 1, bgcolor: 'background.paper',  borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}>
			<Tabs 
				value={value} 
				onChange={handleChange}
				centered 
				TabIndicatorProps={{
					style: {
						backgroundColor: "#002f34"
					},
				}}
			>
				<Tab label='Zaloguj si??' {...a11yProps(0)} sx={{color: "#002f34", "&.Mui-focused": {color: "#002f34"}, '&:hover':{color: "#002f34"}, "&:focus": {color: "#002f34"}, "&.Mui-selected": {color: "#002f34"}}}/>
				<Tab label='Rejestracja' {...a11yProps(1)} sx={{color: "#002f34", "&.Mui-focused": {color: "#002f34"}, '&:hover':{color: "#002f34"}, "&:focus": {color: "#002f34"}, "&.Mui-selected": {color: "#002f34"}}}/>
			</Tabs>
		</Box>
		<TabPanel value={value} index={0}>
			<Grid container rowSpacing={3} justifyContent='center'>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label='Nazwa U??ytkownika'
						placeholder='Nazwa U??ytkownika'
						id='usernameSignIn'
						variant='filled'
						InputLabelProps={{
							style: { color: '#002f34' },
						}}
						InputProps={{ disableUnderline: true }}
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label='Has??o'
						placeholder='Has??o'
						id='passwordSignIn'
						variant='filled'
						InputLabelProps={{
							style: { color: '#002f34' },
						}}
						InputProps={{ disableUnderline: true }}
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<Link href="/account/password" underline="hover" color={"#002f34"}>
						{'Przypomnienie has??a'}
					</Link>
				</Grid>
				<Grid item xs={12} sx={{textAlign: 'center'}}>
					<Button
						onClick={handleSignIn}
						href='/account'
						variant="contained"
						fullWidth 
						sx={{backgroundColor: '#002f34', '&:hover': {backgroundColor: '#002f34'}}}>
						{'Zaloguj si??'}
					</Button>
				</Grid>
				{status === 400 &&
					<Grid item xs={12}>
						<Typography fontSize={'12px'} color={"#940000"} sx={{textAlign: 'center'}}>
							{'Niepoprawny login lub has??o'}
						</Typography>
					</Grid>
				}
				<Grid item xs={12}>
					<Typography fontSize={'12px'} color={"#0c383d"} sx={{textAlign: 'center'}}>
						{'Zalogowanie oznacza akceptacj?? Regulaminu serwisu ZMITAC.pl w aktualnym brzmieniu. Je??li nie akceptujesz warunk??w zmienionego Regulaminu serwisu ZMITAC.pl, wy??lij o??wiadczenie o rozwi??zaniu Umowy w trybie przewidzianym w Regulaminie.'}
					</Typography>
				</Grid>
			</Grid>
		</TabPanel>
		<TabPanel value={value} index={1}>
			<Grid container rowSpacing={3} justifyContent='center'>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label='E-mail'
						placeholder='E-mail'
						id='email'
						variant='filled'
						InputLabelProps={{
							style: { color: '#002f34' },
						}}
						InputProps={{ disableUnderline: true }}
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label='Has??o'
						placeholder='Podaj has??o'
						id='password'
						variant='filled'
						InputLabelProps={{
							style: { color: '#002f34' },
						}}
						InputProps={{ disableUnderline: true }}
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label='Imi??'
						placeholder='Podaj imi??'
						id='password'
						variant='filled'
						InputLabelProps={{
							style: { color: '#002f34' },
						}}
						InputProps={{ disableUnderline: true }}
						value={firstName}
						onChange={(event) => setFirstName(event.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label='Nazwisko'
						placeholder='Podaj nazwisko'
						id='password'
						variant='filled'
						InputLabelProps={{
							style: { color: '#002f34' },
						}}
						InputProps={{ disableUnderline: true }}
						value={lastName}
						onChange={(event) => setLastName(event.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label='Nazwa U??ytkownika'
						placeholder='Podaj nazw?? u??ytkownika'
						id='password'
						variant='filled'
						InputLabelProps={{
							style: { color: '#002f34' },
						}}
						InputProps={{ disableUnderline: true }}
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
				</Grid>
				<Grid item xs={12} sx={{textAlign: 'center'}}>
					<Button 
						onClick={handleRegister}
						href=''
						disabled={false}
						variant="contained"
						fullWidth 
						sx={{backgroundColor: '#002f34', '&:hover': {backgroundColor: '#002f34'}}}>
						{'Zajerestruj si??'}
					</Button>
				</Grid>
				{status === 200 &&
					<Grid item xs={12}>
						<Typography fontSize={'12px'} color={"#0f9200"} sx={{textAlign: 'center'}}>
							{'Twoje konto zosta??o pomy??lnie utworzone'}
						</Typography>
					</Grid>
				}
				{status === 400 &&
					<Grid item xs={12}>
						<Typography fontSize={'12px'} color={"#940000"} sx={{textAlign: 'center'}}>
							{'Podana nazwa u??ytkownika jest zaj??ta'}
						</Typography>
					</Grid>
				}
				{status == undefined &&
					<Grid item xs={12}>
						<Typography fontSize={'12px'} color={"#0c383d"} sx={{textAlign: 'center'}}>
							{'Klikaj??c przycisk zarejestruj si??, akceptuj?? Regulamin.'}
						</Typography>
					</Grid>
				}
			</Grid>
		</TabPanel>
	</Box>
	);
}