import React from 'react';
import { Box, Container } from '@mui/system';
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Toolbar, Typography } from '@mui/material';
import { Link as MuiLink } from '@mui/material';

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
                    sx={{ flex: 1 }}
                >
                    A Ray of Care
                </Typography>
                <Button variant="outlined" size="small">
                    Sign up
                </Button>
            </Toolbar>

            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
                <MuiLink
                    color="inherit"
                    noWrap
                    variant="body2"
                    sx={{ p: 1, flexShrink: 0 }}
                > button links
                </MuiLink>
            </Toolbar>

            <main>{children}</main>

            <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
                <Container maxWidth="lg">
                    <Typography variant="h6" align="center" gutterBottom>
                        Designed and created by M.Steinberg
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        component="p"
                    >
                        Capstone Project - General Assembly Immersive
                    </Typography>
                </Container>
            </Box>
        </>
    )
}