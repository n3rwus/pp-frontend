import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';

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
                <AppBar sx={{ backgroundColor: '#002f34', py:'5px' }}>
                    <Toolbar>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="center"
                            rowSpacing={2}
                            alignItems="center"
                        >
                            <Grid item xs={4} sm={12} md={3} sx={{textAlign: 'center'}}>
                                <Link href='/'>
                                    <Image src="/logo/olx.png" alt="Olx Logo" width={80} height={56} />
                                </Link>
                            </Grid>
                            <Grid item xs={4} sm={3} md={2}>
                                <Button
                                    href='/404'
                                    startIcon={<ChatBubbleOutlineOutlinedIcon />} 
                                    fullWidth
                                    sx={{color: "#fff" }}
                                >
                                    {'Wiadomości'}
                                </Button>
                            </Grid>
                            <Grid item xs={4} sm={3} md={2}>
                                <Button
                                    href='/404'
                                    startIcon={<FavoriteBorderOutlinedIcon />}
                                    fullWidth
                                    sx={{color: "#fff" }}
                                >
                                    {'Ulubione'}
                                </Button>
                            </Grid>
                            <Grid item xs={6} sm={3} md={2}>
                                <Button
                                    href='/account/authmenu'
                                    startIcon={<PersonOutlineOutlinedIcon />}
                                    fullWidth
                                    sx={{color: "#fff" }}
                                >
                                    {'Mój Olx'}
                                </Button>
                            </Grid>
                            <Grid item xs={6} sm={3} md={2}>
                                <Button
                                    href='/404'
                                    fullWidth
                                    sx={{pb:'5px', color: "#002f34",  backgroundColor: "#fff", '&:hover':{color: "#fff", backgroundColor: "inherit"}}}
                                >
                                    {'Ogłoszenia'}
                                </Button>
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