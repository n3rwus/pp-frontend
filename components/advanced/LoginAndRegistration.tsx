import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
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
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
	setValue(newValue);
	};

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
				<Tab label='Zaloguj się' {...a11yProps(0)} sx={{color: "#002f34", "&.Mui-focused": {color: "#002f34"}, '&:hover':{color: "#002f34"}, "&:focus": {color: "#002f34"}, "&.Mui-selected": {color: "#002f34"}}}/>
				<Tab label='Rejestracja' {...a11yProps(1)} sx={{color: "#002f34", "&.Mui-focused": {color: "#002f34"}, '&:hover':{color: "#002f34"}, "&:focus": {color: "#002f34"}, "&.Mui-selected": {color: "#002f34"}}}/>
			</Tabs>
		</Box>
		<TabPanel value={value} index={0}>
			<Grid container rowSpacing={3} justifyContent='center'>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label='E-mail (do konta ZMITAC)'
						placeholder='E-mail (do konta ZMITAC)'
						id='email'
						variant='filled'
						InputLabelProps={{
							style: { color: '#002f34' },
						}}
						InputProps={{ disableUnderline: true }}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label='Hasło'
						placeholder='Hasło'
						id='password'
						variant='filled'
						InputLabelProps={{
							style: { color: '#002f34' },
						}}
						InputProps={{ disableUnderline: true }}
					/>
				</Grid>
				<Grid item xs={12}>
					<Link href="/account/password" underline="hover" color={"#002f34"}>
						{'Przypomnienie hasła'}
					</Link>
				</Grid>
				<Grid item xs={12} sx={{textAlign: 'center'}}>
					<Button 
						variant="contained"
						fullWidth 
						sx={{backgroundColor: '#002f34', '&:hover': {backgroundColor: '#002f34'}}}>
						{'Zaloguj się'}
					</Button>
				</Grid>
				<Grid item xs={12}>
					<Typography fontSize={'12px'} color={"#0c383d"} sx={{textAlign: 'center'}}>
						{'Zalogowanie oznacza akceptację Regulaminu serwisu ZMITAC.pl w aktualnym brzmieniu. Jeśli nie akceptujesz warunków zmienionego Regulaminu serwisu ZMITAC.pl, wyślij oświadczenie o rozwiązaniu Umowy w trybie przewidzianym w Regulaminie.'}
					</Typography>
				</Grid>
			</Grid>
		</TabPanel>
		<TabPanel value={value} index={1}>
			<Grid container rowSpacing={3} justifyContent='center'>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label='E-mail (do konta ZMITAC)'
						placeholder='E-mail (do konta ZMITAC)'
						id='email'
						variant='filled'
						InputLabelProps={{
							style: { color: '#002f34' },
						}}
						InputProps={{ disableUnderline: true }}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label='Hasło'
						placeholder='Podaj hasło'
						id='password'
						variant='filled'
						InputLabelProps={{
							style: { color: '#002f34' },
						}}
						InputProps={{ disableUnderline: true }}
					/>
				</Grid>
				<Grid item xs={12}>
					<Typography fontSize={'12px'} color={"#0c383d"} sx={{textAlign: 'center'}}>
						{'Klikając przycisk zarejestruj się, akceptuję Regulamin.'}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography fontSize={'12px'} color={"#0c383d"} sx={{textAlign: 'center'}}>
						{'Przyjmuję do wiadomości, że ZMITAC wykorzystuje moje dane osobowe zgodnie z Polityką prywatności oraz Polityką dotyczącą plików cookie i podobnych technologii. ZMITAC wykorzystuje zautomatyzowane systemy i partnerów do analizowania, w jaki sposób korzystam z usług w celu zapewnienia odpowiedniej funkcjonalności produktu, treści, dostosowanych i opartych na zainteresowaniach reklam, jak również ochrony przed spamem, złośliwym oprogramowaniem i nieuprawnionym korzystaniem z naszych usług.'}
					</Typography>
				</Grid>
				<Grid item xs={12}>
				<FormControlLabel 
					control={
						<Checkbox
							sx={{
								color: '#002f34',
								'&.Mui-checked': {
								color: '#002f34',
								},
							}}
						/>
					} 
					label={ <Typography fontSize={'10px'} color={"#8c9ba3"} sx={{textAlign: 'center'}}>
						{"Wyrażam zgodę na używanie przez Grupę ZMITAC sp. z o.o. środków komunikacji elektronicznej oraz telekomunikacyjnych urządzeń końcowych w celu przesyłania mi informacji handlowych oraz prowadzenia marketingu (np. newsletter, wiadomości SMS) przez Grupę ZMITAC sp. z o.o., podmioty powiązane i partnerów biznesowych. Moja zgoda obejmuje numery telefonów i adresy e-mail wykorzystywane podczas korzystania z usług Grupy ZMITAC Sp. z o.o. Wyrażoną zgodę można wycofać lub ograniczyć w dowolnej chwili za pomocą odpowiednich ustawień konta lub zgłaszając nam takie żądanie."}
					</Typography>}
					/>
				</Grid>
				<Grid item xs={12} sx={{textAlign: 'center'}}>
					<Button 
						variant="contained"
						fullWidth 
						sx={{backgroundColor: '#002f34', '&:hover': {backgroundColor: '#002f34'}}}>
						{'Zajerestruj się'}
					</Button>
				</Grid>
			</Grid>
		</TabPanel>
	</Box>
	);
}