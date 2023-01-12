import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ClientDetails() {
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        console.log(id)
    }, [id])
    return (
        <div> ClientDetails</div>
    )
}
