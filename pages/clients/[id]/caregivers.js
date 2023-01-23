import React, { useState, useEffect } from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import ClientLayout from '../../../components/ClientLayout';
import { Alert, Box, Divider, IconButton, InputBase, List, ListItem, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useUserProfile } from '../../../components/UserProfileProvider';
import axios from 'axios';
import { PersonAdd } from '@mui/icons-material';
import { UserRole } from '@prisma/client';


const ClientCaregivers = withPageAuthRequired(
    function ClientCaregivers() {

        const [caregivers, setCaregivers] = useState()
        const router = useRouter()
        const userProfile = useUserProfile()
        const { id } = router.query
        const [error, setError] = useState();
        const [addError, setAddError] = useState();
        const [loading, setLoading] = useState(true)
        const [caregiverId, setCaregiverId] = useState()

        useEffect(() => {
            if (id) {
                fetchCaregivers()
            }
        }, [id])

        const fetchCaregivers = () => {
            fetch(`/api/clients/${id}/caregivers`)
                .then((res) => res.json())
                .then((data) => {
                    setLoading(false)
                    setCaregivers(data)
                    setError()
                }).catch((error) => {
                    setLoading(false)
                    setCaregivers();
                    setError(error)
                })
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            axios.post(`/api/clients/${id}/caregivers`, { caregiverId })
                .then((res) => {
                    fetchCaregivers()
                }).catch((error) => {
                    if (error.response.status === 400) {
                        setAddError(error.response.data.message)
                    } else {
                        setAddError('unkown error occured. please try again')
                    }
                })
        }
        const handleChange = (event) => {
            setCaregiverId(event.target.value)
        }

        return (
            <>
                <Paper>
                    {/*  https://mui.com/material-ui/react-text-field/#customization */}
                    {userProfile?.roles.includes(UserRole.guardian) &&
                        <>
                            <Box component='div' sx={{ p: 2 }}>
                                <Paper
                                    component="form"
                                    onSubmit={handleSubmit}
                                    elevation={3}
                                    color='secondary'
                                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
                                >
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Caregiver ID"
                                        inputProps={{ 'aria-label': 'Caregiver ID' }}
                                        onChange={handleChange}
                                        value={caregiverId}
                                    />
                                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="Add Caregiver by id" type="submit">
                                        <PersonAdd />
                                    </IconButton>
                                </Paper>
                            </Box>
                            <Divider />
                        </>
                    }

                    {addError &&
                        <Alert severity="error">{addError}</Alert>
                    }

                    {/* //TODO show add caregiver error */}


                    {!caregivers && <Box component='div' sx={{ p: 2 }}>
                        <Typography>No Caregivers yet. Add your first!</Typography>
                    </Box>
                    }
                    {caregivers &&
                        <List>
                            {caregivers.map((caregiver) => {
                                return (
                                    <ListItem key={caregiver.userId}>
                                        <Typography>
                                            {caregiver.firstName} {caregiver.lastName} : {caregiver.email}
                                        </Typography><Divider />
                                    </ListItem>
                                )
                            })}
                        </List>
                    }
                </Paper>
            </>

        )
    })
export default ClientCaregivers;
ClientCaregivers.getLayout = (page) => {
    return (
        <ClientLayout>
            {page}
        </ClientLayout>
    )
}