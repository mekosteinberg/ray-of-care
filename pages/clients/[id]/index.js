import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'

// * Single Client Details View

export default function ClientDetails() {
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        console.log(id)
    }, [id])

    return (
        <>
        <Typography></Typography>
        <div> ClientDetails</div>
        </>
        
    )
}
