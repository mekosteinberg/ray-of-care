import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router'
//MUI imports
import { Avatar, Box, Button, Container, CssBaseline, FormGroup, Paper, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default withPageAuthRequired( function EditUserProfile({ initialProfile }) {
    const emptyProfile = { firstName: '', lastName: '', line1: '', line2: '', city: '', state: '', zipcode: '', homePhone: '', cellPhone: '' }

    const [profile, setProfile] = useState(emptyProfile)
    const router = useRouter();

    const handleChange = (event) => {
        setProfile({ ...profile, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .put('/api/profile', profile)
            .then(() => {
                router.push('/profile')
            })
            .catch((err) => {
                //TODO Show an error message
                console.log(err)
            })
    }

    useEffect(() => {
        fetch('/api/profile')
            .then((res) => res.json())
            .then((data) => {
                //in case a line is empty, this makes null an empty string and avoids errors
                Object.keys(data).forEach(key => {
                    if (data[key] === null) {
                        data[key] = ''
                    }
                })
                setProfile(data);
            }).catch((error) => {
                // clear out current profile so the card doesn't because the server failed to get data
                // TODO make the error message look nicer
                setProfile(emptyProfile);
                // setError(error);
                console.log(error)
            })
    })

    return (
        <ThemeProvider theme={darkTheme}>
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
                        Edit your Profile
                    </Typography>
                    <Paper sx={{ p: 4 }}>
                        <FormGroup>
                            {/* ^^This made it not overlap the value and label */}
                            <Box component="form"
                                onSubmit={handleSubmit}
                                //     (e) => {
                                //     e.preventDefault()
                                //     console.log('submit')
                                // }
                                sx={{ mt: 1 }}>
                                <TextField
                                    onChange={handleChange}
                                    value={profile.firstName}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    name="firstName"
                                />
                                <TextField
                                    onChange={handleChange}
                                    value={profile.lastName}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                />
                                <TextField
                                    onChange={handleChange}
                                    value={profile.line1}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="line1"
                                    label="Address 1"
                                    name="line1"
                                />
                                <TextField
                                    onChange={handleChange}
                                    value={profile.line2}
                                    margin="normal"
                                    fullWidth
                                    id="line2"
                                    label="Address 2(Apt, Ste, Box# etc.)"
                                    name="line2"
                                />
                                <TextField
                                    onChange={handleChange}
                                    value={profile.city}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="city"
                                    label="City"
                                    name="city"
                                />
                                <TextField
                                    onChange={handleChange}
                                    value={profile.state}
                                    margin="normal"
                                    required
                                    id="state"
                                    label="State"
                                    name="state"
                                />
                                <TextField
                                    onChange={handleChange}
                                    value={profile.zipcode}
                                    sx={{ ml: 4 }}
                                    margin="normal"
                                    required
                                    id="zipcode"
                                    label="Zipcode"
                                    name="zipcode"
                                />
                                <TextField
                                    onChange={handleChange}
                                    value={profile.homePhone}
                                    margin="normal"
                                    fullWidth
                                    id="homePhone"
                                    label="Home Phone"
                                    name="homePhone"
                                />
                                <TextField
                                    onChange={handleChange}
                                    value={profile.cellPhone}
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
                        </FormGroup>
                    </Paper >
                </Box>
            </Container>
        </ThemeProvider>
    )
})
