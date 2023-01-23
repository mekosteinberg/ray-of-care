import React, { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import ClientLayout, { useClient } from '../../../components/ClientLayout';

// * Single Client Details View

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const ClientDetails = withPageAuthRequired(function ClientDetails() {
    const router = useRouter()
    const { id } = router.query
    // TODO use roles to guard the add/edit client button
    const clientProfile = useClient();


    return (
        <>
            <ThemeProvider theme={darkTheme}>

                {clientProfile &&
                    <>
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
