
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProfileView() {
    return (
        <Box>
            <Card sx={{ minWidth: 400 }}>
                <CardContent>
                    <Typography svariant="h5" color="text.secondary" gutterBottom>
                        Persons Name
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        address
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        phone
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        email
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        password(hidden)
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Edit</Button>
                    <Button size="small">Delete</Button>
                </CardActions>
            </Card>
        </Box>
    );
}