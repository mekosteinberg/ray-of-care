
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

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
        <Box align="center">{error && <div>something went wrong...</div>}

            {profile &&

                <Card sx={{ width: 400 }}>
                    <CardContent align="left">
                        <Typography svariant="h5" color="text.secondary" gutterBottom>
                            Name:   {profile.firstName} {profile.lastName}
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
                        <Button size="small">Edit</Button>
                        <Button size="small">Delete</Button>
                    </CardActions>
                </Card>
            }

        </Box>
    );
}