import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ViewListIcon from '@mui/icons-material/ViewList';
import LoginIcon from '@mui/icons-material/Login';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';


function Navbar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(!open);
    };

    return (
        <div>


            <Button style={{ width: "100vw", backgroundColor: "#a663cc", color: "black" }} onClick={toggleDrawer}>Menu</Button>
            <Drawer
                anchor="top"
                open={open}
                onClose={toggleDrawer}
            >
                <Box
                    sx={{ width: "auto" }}
                    role="presentation"
                    onClick={toggleDrawer}
                    onKeyDown={toggleDrawer}
                >
                    <List>
                        <Link to="/">
                            <ListItem button key={'Home'}>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Home'} />
                            </ListItem>
                        </Link>
                        <Link to="/tierlist">
                            <ListItem button key={'Tier List'}>
                                <ListItemIcon>
                                    <ViewListIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Tier List'} />
                            </ListItem>
                        </Link>
                        <Link to="/login">
                            <ListItem button key={'Login'}>
                                <ListItemIcon>
                                    <LoginIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Login'} />
                            </ListItem>
                        </Link>
                        <Link to="/register">
                            <ListItem button key={'Register'}>
                                <ListItemIcon>
                                    <LockOpenIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Register'} />
                            </ListItem>
                        </Link>
                    </List>
                </Box>
            </Drawer>


        </div>
    );
}

export default Navbar
