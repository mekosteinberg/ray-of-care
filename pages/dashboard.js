import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';

import { Box, Container } from '@mui/system'
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import { useUserProfile } from '../components/UserProfileProvider';
import { useUser } from '@auth0/nextjs-auth0/client';
import { UserRole } from '@prisma/client';

export default function Dashboard() {
    const router = useRouter()
    const { user } = useUser();

    const userProfile = useUserProfile()
    const [clients, setClients] = useState([])

    //TODO Get CLient Data, mapped out
    useEffect(() => {
        // are you signed in and do you have a profile?
        if (user && userProfile) {
            axios
                .get('/api/clients')
                .then((response) => {
                    setClients(response.data)
                })
        }
    }, [])

    return (
        <Container sx={{ my: 2 }}>
            <Box sx={{ mb: 2 }}>
                {/* only let guardians create a client in the system */}
                {userProfile?.roles.includes(UserRole.guardian) &&
                    <Button onClick={() => {
                        router.push('/clients/create')
                    }}>Add Client</Button>
                }
            </Box>
            <Grid container spacing={2}>
                {clients.map((client, index) => {
                    return (
                        <Grid key={client.id} item xs={12} md={6} lg={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {client.firstName} {client.lastName}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {client.city}, {client.state}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => {
                                        router.push('/clients/' + client.id)
                                    }}>Profile</Button>
                                    <Button>Messages</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}
