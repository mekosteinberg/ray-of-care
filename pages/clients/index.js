import React from 'react'
import Link from 'next/link'

export default function ClientList() {
    const clientIds = ['abc123']
    return (
        <>
            <div>make a client list here</div>
            {clientIds.map(id => (
                <Link href={`/clients/${id}`} key={id}>Shea Requa</Link>
            ))}
        </>

    )
}
