import React from 'react'
import { Avatar, Box, Button, Container, CssBaseline, FormControl, FormControlLabel, FormLabel } from '@mui/material';
import { Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function create() {



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
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="address1"
                                label="Home Address"
                                name="address"
                                autoComplete="address"
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                id="address2"
                                label="Address 2(Apt, Ste, Box# etc.)"
                                name="address2"
                                autoComplete="address2"

                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="city"
                                label="City"
                                name="city"
                                autoComplete="city"
                            />
                            <TextField
                                margin="normal"
                                required
                                id="state"
                                label="State"
                                name="state"
                                autoComplete="state"
                            />
                            <TextField sx={{ ml: 4 }}
                                margin="normal"
                                required
                                id="zipcode"
                                label="Zipcode"
                                name="zipcode"
                                autoComplete="zipcode"
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
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="dob"
                                label="Date of Birth: dd/mm/yyyy"
                                name="dob"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="healthConcerns"
                                label="Health Concerns (ex:ASD, seizure disorders, etc.)"
                                name="healthConcerns"
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
