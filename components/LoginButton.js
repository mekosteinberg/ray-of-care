import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import { Link as MuiLink, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function LoginButton() {
    const { user } = useUser();
    //* ^this is checking that the person is logged in

    //TODO: Guard UseEffect Fetch data here

    if (user) {
        return (
            <>
                <ThemeProvider theme={darkTheme}>
                    <Typography component="span">Welcome {user.name}! </Typography>
                    <MuiLink href="/api/auth/logout" color="inherit">Logout</MuiLink>
                </ThemeProvider>
            </>
        );
    } else {
        return (
            <ThemeProvider theme={darkTheme}>
                <MuiLink href="/api/auth/login" color="inherit">Login</MuiLink>
            </ThemeProvider>
        )
    }
}
