import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Grid, List, ListItem, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';

// * Single Client Details View

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function ClientDetails() {
    const router = useRouter()
    const { id } = router.query
    const [clientProfile, setClientProfile] = useState();

    //id is not available immediately on the fetch, so these 
    //show loading indicator until the fetch is complete
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (id) {
            fetch('/api/clients/' + id)
                .then((res) => res.json())
                .then((data) => {
                    setLoading(false)
                    setClientProfile(data)
                    setError()
                }).catch((error) => {
                    setLoading(false)
                    setClientProfile();
                    setError(error)
                })
        }

    }, [id])

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <Box align="center">
                    <Typography variant="h4" align="left">{clientProfile.firstName} {clientProfile.lastName}</Typography>
                    {error && <div>Something went wrong...</div>}
                    {loading && <span>loading...</span>}
                    {clientProfile &&
                        <Grid container>
                            <Grid item xs={12} md={6} lg={4}>
                                <Card sx={{ m: 2, width: 400 }}>
                                    <CardContent align="left">
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Address: {clientProfile.line1}, {clientProfile.line2}<br />
                                            {clientProfile.city}, {clientProfile.state}  {clientProfile.zipcode}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Mobile Phone: {clientProfile.cellPhone}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Home Phone: {clientProfile.homePhone}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Date-of-Birth: {clientProfile.dob}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Gender: {clientProfile.gender}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Basic Details: {clientProfile.story}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small"
                                            onClick={() => {
                                                router.push(`/clients/${id}/edit`)
                                            }}
                                        >Edit</Button>
                                        <Button size="small">Delete</Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={6} lg={4}>
                                <Card sx={{ m: 2, width: 400 }}>
                                    <CardContent>
                                        <Typography>Important Details</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={6} lg={4}>
                                <Card sx={{ m: 2, width: 400 }}>
                                    <CardContent>
                                        <Typography>Guardian/Family</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={6} lg={4}>
                                <Card sx={{ m: 2, width: 400 }}>
                                    <CardContent>
                                        <Typography>Caregivers</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={6} lg={4}>
                                <Card sx={{ m: 2, width: 400 }}>
                                    <CardContent>
                                        Daily Tasks
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={6} lg={4}>
                                <Card sx={{ m: 2, width: 400 }}>
                                    <CardContent>
                                        <Typography>Hobbies/Activities</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={6} lg={4}>
                                <Card sx={{ m: 2, width: 400 }}>
                                    <CardContent>
                                        <Typography>Diet</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={6} lg={4}>
                                <Card sx={{ m: 2, width: 400 }}>
                                    <CardContent>
                                        <Typography>Calender</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={6} lg={4}>
                                <Card sx={{ m: 2, width: 400 }}>
                                    <CardContent>
                                        <Typography>Medical Contacts</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>
                    }
                </Box>
            </ThemeProvider>
        </>

    )
}

