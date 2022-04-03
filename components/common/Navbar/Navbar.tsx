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
                <AppBar sx={{backgroundColor: '#002f34'}}>
                    <Toolbar>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />

                        <IconButton>
                            <ChatBubbleOutlineOutlinedIcon />
                            <div>
                                blablabla
                            </div>
                        </IconButton>
                        <Button variant='text'>
                            <ChatBubbleOutlineOutlinedIcon />
                            <div>
                                blablabla
                            </div>
                        </Button>
                        <IconButton>
                            <FavoriteBorderOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <PersonOutlineOutlinedIcon />
                            <div>
                                blablabla
                            </div>
                        </IconButton>
                        <AddAnnouncementButton title='XD'/>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </Box>
    );
};

export default Navbar;