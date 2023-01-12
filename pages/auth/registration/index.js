import React from 'react'
import Link from 'next/link'

export default function RegistrationLanding() {
    return (
        <>
            <Link href="/auth/registration/caregiver">register as caregiver</Link>
            <Link href="/auth/registration/guardian">register as guardian</Link>
        </>
    )
}
