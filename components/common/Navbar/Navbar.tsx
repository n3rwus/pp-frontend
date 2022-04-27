import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AddAnnouncementButton from '../Button/AddAnnouncementButton';
import Image from 'next/image'
import Grid from '@mui/material/Grid';

interface IProps {
    children: React.ReactElement;
}



function HideOnScroll(props: IProps) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Navbar = () => {

    return (

        <Box sx={{ flexGrow: 1 }}>
            <HideOnScroll>
                <AppBar sx={{ backgroundColor: '#002f34' }}>
                    <Toolbar>
                        <Grid container spacing={2} columns={16}>
                            <Grid item xs={8}>
                                <Image src="/logo/olx.png" alt="Olx Logo" width={103} height={80} layout='fixed' />
                            </Grid>
                            <Grid item xs={8}>
                                <Grid container spacing={4} columns={16}>
                                    <Grid item xs={4}>
                                        <Button color='warning'>
                                            <ChatBubbleOutlineOutlinedIcon />
                                            <div>
                                                blablabla
                                            </div>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <IconButton>
                                            <FavoriteBorderOutlinedIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <IconButton>
                                            <PersonOutlineOutlinedIcon />
                                            <div>
                                                blablabla 2
                                            </div>
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button color='warning'>
                                            asdasda
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </Box>

    );
};

export default Navbar;