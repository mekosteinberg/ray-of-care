import Head from 'next/head'
import { Card, CardActionArea, CardMedia, CardContent, List, Paper, Typography, Grid } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0/client';
import { Container } from '@mui/system';
import { useEffect } from 'react';

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

  const { user } = useUser();
  // const router = useRouter()
  // useEffect(() => {
  //   if (user) {
  //     router.push('/dashboard')
  //   }
  // }, [user, router])

  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container sx={{ my: 2 }}>

        <Paper elevation={4} sx={{ m: 2, p: 2 }}>
          <Grid item xs={12} md={6} sx={{ m: 2 }}>
            <CardActionArea>
              <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    A Ray of Care
                  </Typography>
                  <Typography variant="body2" >
                    Are you tired of the constant communication and coordination struggles with your loved one&apos;s care team? Introducing our new app, the ultimate solution for seamless communication and organization. Our app allows you to easily & safely share important medical information, keep track of important dates and communicate with your loved one&apos;s care team all in one place. Say goodbye to forgotten tasks and miscommunications. Try it now and see how it can help you let go of some responsibilities.</Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: 300, display: { xs: 'none', sm: 'block' } }}
                  image="/careImg.jpg"
                  alt="caregiver and client with groceries"
                />
              </Card>
            </CardActionArea>
          </Grid>
        </Paper>

        {/* Messaging Tab */}
        <Paper elevation={4} sx={{ m: 2, p: 2 }}>
          <Grid item xs={12} md={6} sx={{ m: 2 }}>
            <CardActionArea>
              <Card sx={{ display: 'flex' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 300, display: { xs: 'none', sm: 'block' } }}
                  image="/careImg3.png"
                  alt="caregiver messaging"
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Messaging
                  </Typography>
                  <Typography variant="body2" >
                    Simplified communication between all caregivers and family members to improve the life of your loved one.</Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        </Paper>

        {/* Task Tab */}
        <Paper elevation={4} sx={{ m: 2, p: 2 }}>
          <Grid item xs={12} md={6} sx={{ m: 2 }}>
            <CardActionArea>
              <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Task management
                  </Typography>
                  <Typography variant="body2" >
                    Are things getting done? Make task management easier by seeing what the last caregiver did so the next shift can plan accordingly</Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: 300, display: { xs: 'none', sm: 'block' } }}
                  image="/careImg2.png"
                  alt="caregiver and client holding hands"
                />
              </Card>
            </CardActionArea>
          </Grid>
        </Paper>

        <Paper elevation={4} sx={{ my: 2 }}>
          <Typography>
            Future Release Goals:
            Keep important information about your loved one or client in an organized manner
          </Typography>
          images of profile sections like hobbies, likes/dislikes, favorite foods, etc
        </Paper>
      </Container>
    </>
  );
}

//*Setup didnt work, starting over 
{/* <Grid container component="main" sx={{ height: '100vh' }}>
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
                  <AccessibilityNewIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                  About Us
                </Typography>
                <Box component="form" noValidate
                  // onSubmit={handleSubmit} 
                  sx={{ mt: 1 }}>
                  <Grid container>
                    <Grid item>
                      <MuiLink href="/auth/registration" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </MuiLink>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid> */}