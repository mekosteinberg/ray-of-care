import React, { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { useUserProfile } from '../../../components/UserProfileProvider';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import ClientLayout, { useClient } from '../../../components/ClientLayout';

// * Single Client Details View

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const ClientDetails = withPageAuthRequired(function ClientDetails() {
    const router = useRouter()
    // TODO use roles to guard the add/edit client button
    const clientProfile = useClient();

    return (
        <>
            <ThemeProvider theme={darkTheme}>

                {clientProfile &&
                    <>
                        {/* <Grid container spacing={2}>
                                <Grid item xs={12} md={6} lg={4} > */}
                        <Card sx={{ width: { xs: "100%" } }}>
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
                        {/* </Grid> */}

                        {/* <Grid item xs={12} md={6} lg={4}>
                                    <Card sx={{ width: { xs: "100%" } }}>
                                        <CardContent>
                                            <Typography>Important Details</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={6} lg={4}>
                                    <Card sx={{ width: { xs: "100%" } }}>
                                        <CardContent>
                                            <Typography>Guardian/Family</Typography>
                                        </CardContent>
                                        <CardActions>
                                            //Todo: add family by id
                                            <Button size="small"
                                                onClick={() => {
                                                    router.push(`/clients/${id}/edit`)
                                                }}
                                            >Add</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={6} lg={4}>
                                    <Card sx={{ width: { xs: "100%" } }}>
                                        <CardContent>
                                            <Typography>Caregivers</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <form onSubmit={(e) => {
                                                e.preventDefault()

                                            }}>
                                                <TextField name="caregiverID" size="small" label="Caregiver ID here"></TextField>
                                                <Button size="small" type="submit"
                                                >Add</Button>
                                            </form>
                                        </CardActions>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={6} lg={4}>
                                    <Card sx={{ width: { xs: "100%" } }}>
                                        <CardContent>
                                            Daily Tasks
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={6} lg={4}>
                                    <Card sx={{ width: { xs: "100%" } }}>
                                        <CardContent>
                                            <Typography>Hobbies/Activities</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={6} lg={4}>
                                    <Card sx={{ width: { xs: "100%" } }}>
                                        <CardContent>
                                            <Typography>Diet</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={6} lg={4}>
                                    <Card sx={{ width: { xs: "100%" } }}>
                                        <CardContent>
                                            <Typography>Calender</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={6} lg={4}>
                                    <Card sx={{ width: { xs: "100%" } }}>
                                        <CardContent>
                                            <Typography>Medical Contacts</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid> */}

                        {/* </Grid> */}
                    </>
                }
            </ThemeProvider>
        </>
    )
})

export default ClientDetails;
// https://nextjs.org/docs/basic-features/layouts#per-page-layouts
// a secret pathway to inject additional page layout, and can be used on other pages when injected
// adds an extra property to the component that is detected by the root app layout (in this case from next.js)
ClientDetails.getLayout = (page) => {
    return (
        <ClientLayout>
            {page}
        </ClientLayout>
    )
}
