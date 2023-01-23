import React from 'react';
import { Container } from '@mui/system';
import { Link as MuiLink, Toolbar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from './AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function Layout({ children }) {

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <Box sx={{}}>
                    <CssBaseline />
                    <AppBar />

                    <Box component="main" sx={{ p: 3 }}>
                        <Toolbar />
                        {children}
                    </Box>
                    <Box component="footer" 
                    sx={{ bgcolor: 'background.paper', py: 6 }}>
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
                </Box>
            </ThemeProvider>
        </>
    )
}