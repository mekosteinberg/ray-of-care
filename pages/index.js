import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
//MUI imports
import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid } from '@mui/material';
import { Paper, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { Link as MuiLink } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//Image Import
import Image from '../public/careImg.jpg';

const theme = createTheme();

// export default function SignInSide() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: `url(${Image})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <Box
                sx={{
                  my: 4,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box component="form" noValidate
                  // onSubmit={handleSubmit} 
                  sx={{ mt: 1 }}>
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
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <MuiLink href="#" variant="body2">
                        Forgot password?
                      </MuiLink>
                    </Grid>
                    <Grid item>
                      <MuiLink href="/auth/registration" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </MuiLink>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>

      </main>
    </>
  );
}
