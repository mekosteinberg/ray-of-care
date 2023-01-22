import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import { Avatar, Box, Button, Container, CssBaseline, FormControl, FormControlLabel, FormLabel } from '@mui/material';
import { Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default withPageAuthRequired( function CreateClient() {

    let emptyProfile = { firstName: '', lastName: '', line1: '', line2: '', city: '', state: '', zipcode: '', homePhone: '', cellPhone: '', dob: '', story: '' }
    const [profile, setProfile] = useState(emptyProfile)
    const router = useRouter();

    const handleChange = (event) => {
        setProfile({ ...profile, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .post('/api/clients', profile)
            .then(({ data }) => {
                router.push('/clients/' + data.id)
            })
            .catch((err) => {
                //TODO Show an error message
                console.log(err)
            })
    }

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
                        Add a Client Profile
                    </Typography>
                    <Paper sx={{ p: 4 }}>
                        <Box component="form"
                            onSubmit={handleSubmit}
                            noValidate sx={{ mt: 1 }}>
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
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="gender"
                                >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>

                            <TextField
                                onChange={handleChange}
                                value={profile.line1}
                                margin="normal"
                                required
                                fullWidth
                                id="line1"
                                label="Home Address"
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
                            <TextField sx={{ ml: 4 }}
                                onChange={handleChange}
                                value={profile.zipcode}
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
                            <TextField
                                onChange={handleChange}
                                value={profile.dob}
                                margin="normal"
                                required
                                fullWidth
                                id="dob"
                                label="Date of Birth: dd/mm/yyyy"
                                name="dob"
                            />
                            <TextField
                                onChange={handleChange}
                                value={profile.story}
                                margin="normal"
                                fullWidth
                                id="story"
                                label="Brief Description"
                                name="story"
                                multiline
                                rows={4}
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
})
