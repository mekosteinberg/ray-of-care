import React from 'react'
import { AppBar as MuiAppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginButton from './LoginButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useUserProfile } from './UserProfileProvider';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const drawerWidth = 240;

const loggedOutNav = [{
    text: 'Home',
    href: '/'
}, {
    text: 'About',
    href: '/about'
}, {
    text: 'Contact',
    href: '/contact'
}, {
    text: 'Login',
    href: '/api/auth/login'
}];

const loggedInNav = [{
    text: 'Dashboard',
    href: '/dashboard'
}, {
    text: 'Your Profile',
    href: '/profile'
}, {
    text: 'Logout',
    href: '/api/auth/logout'
}
]

export default function AppBar() {
    const { user } = useUser();
    const router = useRouter()
    const userProfile = useUserProfile()
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const navItems = user ? loggedInNav : loggedOutNav

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Divider />
            {userProfile && <>
                <Typography variant="body1" sx={{ my: 2 }}>
                    Welcome,<br />{userProfile.firstName}
                </Typography>
                <Divider />
            </>
            }

            <List>
                {navItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => {
                            router.push(item.href)
                        }}>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <MuiAppBar component="nav">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            A Ray of Care
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item.text} sx={{ color: '#fff' }} onClick={() => {
                                    router.push(item.href)
                                }}>
                                    {item.text}
                                </Button>
                            ))}
                            {userProfile && <Typography component='div' sx={{ py: '6px', px: '8px', display: 'inline-flex', textTransform: 'none', verticalAlign: 'middle' }} variant='button'>Welcome, {userProfile.firstName}</Typography>}
                        </Box>
                    </Toolbar>
                </MuiAppBar>
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </ThemeProvider>
        </>
    )
}
