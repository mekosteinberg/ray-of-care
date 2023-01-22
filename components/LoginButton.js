import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import { Link as MuiLink, Typography } from '@mui/material';

export default function LoginButton() {
    const { user } = useUser();
    //* ^this is checking that the person is logged in

    if (user) {
        return (
            <>
                <Typography component="span">Welcome {user.name}! </Typography>
                <MuiLink href="/api/auth/logout" color="inherit" variant='button'>Logout</MuiLink>
            </>
        );
    } else {
        return (
            <MuiLink href="/api/auth/login" color="inherit" underline='none' variant='button' sx={{ px: '8px', py: '6px' }}>Login</MuiLink>
        )
    }
}
