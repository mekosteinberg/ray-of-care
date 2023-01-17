import React from 'react';
import { Container } from '@mui/system';
import { Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginButton from './LoginButton';


export default function Layout({ children }) {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            A Ray of Care
                        </Typography>
                        <LoginButton />
                    </Toolbar>
                </AppBar>
            </Box>
            <main>{children}</main>

            <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
                <Container maxWidth="lg">
                    <Typography variant="h6" align="center" gutterBottom>
                        Created & Designed M.Steinberg
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        component="p"
                    >
                        Capstone Project - General Assembly Immersive
                    </Typography>
                    <MuiLink href="https://www.linkedin.com/in/mekosteinberg"><LinkedInIcon color="primary" fontSize="large" /></MuiLink>
                    <MuiLink href="https://github.com/mekosteinberg"><GitHubIcon color="primary" fontSize="large" /></MuiLink>
                </Container>
            </Box>
        </>
    )
}