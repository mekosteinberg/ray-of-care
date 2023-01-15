import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import { Link as MuiLink } from '@mui/material';

export default function LoginButton() {
    const { user } = useUser();
    if (user) {
        return (
            <>
                <span>welcome {user.name}! </span>
                <MuiLink href="/api/auth/logout" color="inherit">logout</MuiLink>
            </>
        );
    } else {
        return (
            <MuiLink href="/api/auth/login" color="inherit">Login</MuiLink>
        )
    }
}
