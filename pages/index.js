import Head from 'next/head'
//MUI imports
import { Card, CardActionArea, CardMedia, CardContent, List } from '@mui/material';
import { Paper, Typography } from '@mui/material';

import { createTheme } from '@mui/material/styles';


//Image Import

import { Container } from '@mui/system';

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
      <Container sx={{ my: 2 }}>

        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              image="/careImg.jpg"
              alt="caregiver and client with groceries"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                A Ray of Care
              </Typography>
              <Typography variant="body2" >
                Are you tired of the constant communication and coordination struggles with your loved one's care team? Introduce our new app, the ultimate solution for seamless communication and organization. Our app allows you to easily share important medical information, keep track of important dates and communicate with your loved one's care team all in one place. Say goodbye to disorganized medical records and miscommunication. Try it now and see how it can simplify the caregiving process for you.              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Paper elevation={4} sx={{ my: 2 }}>
          put image of calendar here
          <Typography>
            Manage calendars
          </Typography>


        </Paper>
        <Paper elevation={4} sx={{ my: 2 }}>
          <Typography>
            simplified communication, talk about shared communication between guardian, caregiver, family in one place
          </Typography>
          <List>
            communication
          </List>
        </Paper>
        <Paper elevation={4} sx={{ my: 2 }}>
          <Typography>
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