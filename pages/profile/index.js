import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, IconButton, Tooltip, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default withPageAuthRequired(function ProfileView() {
    // only fetch profile on page load
    const [profile, setProfile] = useState();
    const [error, setError] = useState();
    const [showCopyToolTip, setShowCopyToolTip] = useState(false)
    const router = useRouter()

    useEffect(() => {
        fetch('/api/profile')
            .then((res) => res.json())
            .then((data) => {
                setProfile(data);
            }).catch((error) => {
                // clear out current profile so the card doesn't because the server failed to get data
                setProfile();
                setError(error);
            })
    }, [])

    return (

        <ThemeProvider theme={darkTheme}>
            <Box align="center">{error && <div>something went wrong...</div>}

                {profile &&
                    <>

                        <Card sx={{ width: 400 }}>
                            <CardContent align="left">
                                <Typography svariant="h5" color="text.secondary" gutterBottom>
                                    Name:   {profile.firstName} {profile.lastName}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Your Role: {profile.roles}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Address: {profile.line1}, {profile.line2}<br />
                                    {profile.city}, {profile.state}  {profile.zipcode}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Mobile Phone: {profile.cellPhone}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Home Phone: {profile.homePhone}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Email: {profile.email}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"
                                    onClick={() => {
                                        router.push('/profile/edit')
                                    }}
                                >Edit</Button>
                                <Button size="small">Delete</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ m: 2, width: 400 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Your User ID
                                </Typography>
                                <Typography variant="body1" color="text.secondary" gutterBottom>
                                    Share this with other guardians to be granted access to new clients
                                </Typography>
                                <Typography variant="body1">
                                    {profile.id}
                                    <Tooltip title="Id Copied to Clipboard" open={showCopyToolTip}>
                                        <IconButton size="small" onClick={() => {
                                            // Copy the text inside the text field
                                            //https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
                                            navigator.clipboard.writeText(profile.id);
                                            //show a tooltip to let the user know that the item copied, and will disappear after 2 seconds
                                            setShowCopyToolTip(true)
                                            setTimeout(() => {
                                                setShowCopyToolTip(false)
                                            }, 2000);
                                        }}><ContentCopyIcon fontSize="inherit" color="primary" /></IconButton>
                                    </Tooltip>
                                </Typography>
                            </CardContent>
                        </Card>
                    </>
                }

            </Box>
        </ThemeProvider>
    );
});