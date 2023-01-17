
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProfileView() {
    // only fetch profile on page load
    const [profile, setProfile] = useState();
    const [error, setError] = useState();
    useEffect(() => {
        fetch('/api/profile')
            .then((res) => res.json())
            .then((data) => {
                // TODO handle empty?
                setProfile(data);
            }).catch((error) => {
                // clear out current profile so the card doesn't because the server failed to get data
                // TODO make the error message look nicer
                setProfile();
                setError(error);
            })
    }, [])
    return (
        <Box>{error && <div>something went wrong...</div>}
            {profile &&
                <Card sx={{ minWidth: 400 }}>
                    <CardContent>
                        <Typography svariant="h5" color="text.secondary" gutterBottom>
                            Persons Name
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            address
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            phone
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            email
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            password(hidden)
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Edit</Button>
                        <Button size="small">Delete</Button>
                    </CardActions>
                </Card>
            }
        </Box>
    );
}