import { AppBar, Box, Grid, useTheme } from '@mui/material'
import type { NextPage } from 'next'
import TextFieldIcon from '../components/common/TextField/TextFieldIcon'
import SearchIcon from '@mui/icons-material/Search';
import ButtonTextIcon from '../components/common/Button/ButtonTextIcon';

const Home: NextPage = () => {
	return (
		<div>
			{/* 
				NavBar here 
			*/}
			<Box sx={{ flexGrow: 1, width:'75%', mx:'auto', mt: '15%', backgroundColor: '#d3d3d3'}}>
				<AppBar elevation={0} sx={{backgroundColor: '#FFF', position:'inherit', border: 'solid 1px #d3d3d3', borderRadius: 1}}>
					<Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
						<Grid item xs={12} sm={5} md={7}>
							{/* SearchBar */}
							<TextFieldIcon icon={<SearchIcon sx={{color: '#000'}}/>} placeholder={'2 137 ogłoszeń blisko Ciebie'}
							/>
						</Grid>
						<Grid item xs={12} sm={4} md={3}>
							{/* Area */}
							<TextFieldIcon placeholder={'TODO: comboBox with text input'} leftBorder={1} topBorder={1}/>
						</Grid>
						<Grid item xs={12} sm={3} md={2}>
							{/* SearchButton */}
							<ButtonTextIcon text={'Szukaj'} endIcon={<SearchIcon/>} topBorder={1}/>
						</Grid>
					</Grid>
				</AppBar>
				<Grid container spacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					{/* Mapped Categories */}
				</Grid>
				<Grid container spacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					{/* Mapped Promoted? Advertisement */}
				</Grid>
				<Grid container spacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					{/* Footer */}
				</Grid>
			</Box>
		</div>
	)
}

export default Home
