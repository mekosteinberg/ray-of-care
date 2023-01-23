import React, { useEffect, useState } from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import ClientLayout from '../../../components/ClientLayout';
import { Box, Divider, IconButton, InputBase, List, ListItem, Paper, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useClient } from '../../../components/ClientLayout';
import { useUserProfile } from '../../../components/UserProfileProvider';

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
//example "12/19/2012, 11:00:00"
const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: true,
    //https://stackoverflow.com/questions/1091372/getting-the-clients-time-zone-and-offset-in-javascript
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
};
const formatDate = (date) => {
    console.log(date)
    return new Intl.DateTimeFormat('en-US', options).format(Date.parse(date));


}

const Messages = withPageAuthRequired(
    function Messages() {

        const clientProfile = useClient();
        const [message, setMessage] = useState('')
        const [messages, setMessages] = useState([])
        const router = useRouter()
        const { id } = router.query
        const userProfile = useUserProfile()

        const handleSubmit = (e) => {
            e.preventDefault()
            axios
                .post(`/api/clients/${clientProfile.id}/messages`, { message })
                .then(() => {
                    //TODO: insert new message into messages
                    setMessages([
                        {
                            firstName: userProfile.firstName,
                            lastName: userProfile.lastName,
                            message,
                            timestamp: new Date().toISOString()
                        }
                    ].concat(messages))
                    setMessage('')
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        const handleChange = (e) => {
            setMessage(e.target.value)
        }

        useEffect(() => {
            if (id) {
                fetch(`/api/clients/${id}/messages`)
                    .then((res) => res.json())
                    .then((data) => {
                        setMessages(data)
                    })
                    .catch((error) => {
                        setMessages()
                    })
            }
        }, [id])

        return (
            <>
                <Paper sx={{ mb: 2 }}>
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
                                multiline
                                required
                                placeholder="Message"
                                inputProps={{ 'aria-label': 'Message' }}
                                onChange={handleChange}
                                value={message}
                            />
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <IconButton color="primary" sx={{ p: '10px' }} aria-label="Send Message" type="submit">
                                <Send />
                            </IconButton>
                        </Paper>
                    </Box>
                </Paper>
                {messages?.length &&
                    <Paper sx={{ p: 2 }}>
                        {messages.map((m) => {
                            return (
                                <Paper elevation={3} sx={{ p: 1, mb: 2 }} key={m.userId}>
                                    <Typography variant="subtitle1"><strong>{m.firstName} {m.lastName}</strong> {formatDate(m.timestamp)}</Typography>
                                    <Divider sx={{ my: 1 }} />
                                    <Typography variant="body1">{m.message}</Typography>
                                </Paper>
                            )
                        })}

                    </Paper>
                }

            </>

        )

    }
)
export default Messages;
Messages.getLayout = (page) => {
    return (
        <ClientLayout>
            {page}
        </ClientLayout>
    )
}


