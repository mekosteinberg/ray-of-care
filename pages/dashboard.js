import React from 'react'
import { Box, Container } from '@mui/system'
import { Button } from '@mui/material'
import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material'

export default function Dashboard() {
    return (
        <Container sx={{ my: 2 }}>
            <Box sx={{ mb: 2 }}>
                <Button>Add Client</Button>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Shea Requa
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Marysville, WA
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Profile</Button>
                            <Button>Messages</Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </Container>
    )
}
