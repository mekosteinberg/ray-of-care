import { Button, Grid, List, ListItemButton, Menu, MenuItem, Paper, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { Box } from '@mui/system';

//*Controls the Menu for All Client Detail-type Pages

const clientNav = [
    {
        text: 'Profile',
        href: (id) => `/clients/${id}`
    },
    {
        text: 'Caregivers',
        href: (id) => `/clients/${id}/caregivers`
    }
]
//Make these later
{/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Messages</MenuItem>
                            <MenuItem onClick={handleClose}>Daily Activities</MenuItem>
                            <MenuItem onClick={handleClose}>Calendar</MenuItem>
                            <MenuItem onClick={handleClose}>Caregivers</MenuItem>
                            <MenuItem onClick={handleClose}>Guardians</MenuItem>
                            <MenuItem onClick={handleClose}>Medical</MenuItem>
                            <MenuItem onClick={handleClose}>Dietary</MenuItem>
                            <MenuItem onClick={handleClose}>Hobbies</MenuItem> */}

const ClientContext = React.createContext();

export const useClient = () => React.useContext(ClientContext)
export default withPageAuthRequired(function ClientLayout({ children }) {
    const router = useRouter()
    const { id } = router.query
    const [clientProfile, setClientProfile] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true)
    //Menu Stuff from MUI
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        if (id) {
            fetch('/api/clients/' + id)
                .then((res) => res.json())
                .then((data) => {
                    setLoading(false)
                    setClientProfile(data)
                    // setError()
                }).catch((error) => {
                    setLoading(false)
                    setClientProfile();
                    // setError(error)
                })
        }

    }, [id])

    return (
        <ClientContext.Provider value={clientProfile} >
            {/* //id is not available immediately on the fetch, so these
            //show loading indicator until the fetch is complete */}

            {loading &&
                <Box alignContent='center'>
                    <Typography variant='body1'>Loading ...</Typography>
                </Box>
            }
            {clientProfile &&
                <>
                    <Box>
                        <Typography variant="h3" gutterBottom>
                            {clientProfile.firstName} {clientProfile.lastName}
                        </Typography>
                        <Button
                            id="basic-button"
                            sx={{ display: { sm: "none" } }}
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Menu
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {clientNav.map((navItem) => {
                                return (
                                    <MenuItem key={navItem.href(clientProfile.id)} onClick={() => { router.push(navItem.href(clientProfile.id)) }}>{navItem.text}</MenuItem>
                                )
                            })}

                        </Menu>

                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={false} md={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Paper elevation={1}>
                                <List>
                                    {clientNav.map((navItem) => {
                                        return (
                                            <ListItemButton key={navItem.href(clientProfile.id)} onClick={() => { router.push(navItem.href(clientProfile.id)) }}>
                                                {navItem.text}
                                            </ListItemButton>
                                        )
                                    })}
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item xs={true} md={5}>{children}</Grid>
                    </Grid>
                </>
            }
        </ClientContext.Provider>

    )
})
