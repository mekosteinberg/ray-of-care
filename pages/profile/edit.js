import React from 'react'
import { Avatar, Box, Button, Container, CssBaseline, FormControl, FormControlLabel, FormLabel } from '@mui/material';
import { Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { Link as MuiLink } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme()

export default function EditUserProfile() {


    return (
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
                        Edit your details
                    </Typography>
                    <Paper sx={{ p: 4 }}>
                        <Box component="form"
                            onSubmit={(e) => {
                                e.preventDefault()
                                console.log('submit')
                            }}
                            noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                name="firstName"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="address1"
                                label="Address 1"
                                name="address"
                                autoComplete="address"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="address2"
                                label="Address 2(Apt, Ste, Box# etc.)"
                                name="address2"
                                autoComplete="address2"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="city"
                                label="City"
                                name="city"
                                autoComplete="city"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                id="state"
                                label="State"
                                name="state"
                                autoComplete="state"
                                autoFocus
                            />
                            <TextField sx={{ ml: 4 }}
                                margin="normal"
                                required
                                id="zipcode"
                                label="Zipcode"
                                name="zipcode"
                                autoComplete="zipcode"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                id="hmphone"
                                label="Home Phone"
                                name="hmphone"
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                id="cellPhone"
                                label="Cell Phone"
                                name="cellPhone"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Paper >
                </Box>
            </Container>
        </ThemeProvider>
    )
}
