import React from 'react'
import { Link as MuiLink } from '@mui/material';
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid } from '@mui/material';
import { Paper, Stack, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function RegistrationLanding() {
    const theme = createTheme();

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="sm">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <Paper sx={{ p: 4 }}>
                            <Box component="form"
                                // onSubmit={handleSubmit} 
                                noValidate sx={{ mt: 1 }}>
                                    <Typography>Lets get you started! Tell us if you are here to:</Typography>
                                <Stack sx={{mt:1, display:'flex', alignItems:'center'}}>

                                    <Grid container>
                                    <Grid item xs>
                                        <MuiLink href="/auth/registration/guardian">Register as Guardian</MuiLink>
                                    </Grid>
                                    <Grid item xs>
                                        <MuiLink href="/auth/registration/caregiver">Register as Caregiver</MuiLink>
                                    </Grid>
                                </Grid> 
                                {/* <FormControlLabel
                                    control={<Checkbox value="guardian" color="primary" />}
                                    label="Sign Up as Guardian"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="caregiver" color="primary" />}
                                    label="Sign Up as Caregiver"
                                /> */}
                                <Button
                                    type="submit"
                                    // fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Submit
                                </Button>
                                </Stack>
                            </Box>
                        </Paper >
                    </Box>
                </Container>
            </ThemeProvider>




        </>
    )
}
