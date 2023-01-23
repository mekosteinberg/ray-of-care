import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import ClientLayout from '../../../components/ClientLayout';


const ClientCaregivers = withPageAuthRequired( function ClientCaregivers() {

    return (
        <div>caregivers</div>
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