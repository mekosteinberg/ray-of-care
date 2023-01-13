import React from 'react';
import { Box, Container } from '@mui/system';
import { Button, Toolbar, Typography } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Layout({ children }) {
    return (
        <>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Typography
                    component="h2"
                    variant="h4"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ m: 4, p: 5, flex: 1 }}
                >
                    A Ray of Care
                </Typography>
                {/* <Button variant="outlined" size="small">
                    Sign up
                </Button> */}
            </Toolbar>

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