import React from 'react'
import { Avatar, Box, Button, Container, CssBaseline, FormControlLabel, Grid } from '@mui/material';
import { Paper, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { Link as MuiLink } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function Guardian() {

  const theme = createTheme()

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
            Welcome Guardian, Signup Now!
          </Typography>
          <Paper sx={{ p: 4 }}>
            <Box component="form"
              // onSubmit={handleSubmit} 
              noValidate sx={{ mt: 1 }}>
              <Typography>After Registration you will be able to add your loved ones profile and start the care process!</Typography>
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
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
