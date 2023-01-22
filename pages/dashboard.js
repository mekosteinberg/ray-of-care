import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';

import { Box, Container } from '@mui/system'
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'


export default function Dashboard() {
    const router = useRouter()
    const [clients, setClients] = useState([])

    //TODO Get CLient Data, mapped out
    useEffect(() => {
        axios
            .get('/api/clients')
            .then((response) => {
                setClients(response.data)
            })
    }, [])

    return (
        <Container sx={{ my: 2 }}>
            <Box sx={{ mb: 2 }}>
                <Button onClick={() => {
                    router.push('/clients/create')
                }}>Add Client</Button>
            </Box>
            <Grid container spacing={2}>
                {clients.map((client, index) => {
                    return (
                        <Grid item xs={12} md={6} lg={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {client.firstName}{client.lastName}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {client.city}, {client.state}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button>Profile</Button>
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
