import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Layout from '../components/Layout'
import CssBaseline from '@mui/material/CssBaseline';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (

    <UserProvider>
      <CssBaseline>
        <Layout>
          {getLayout(<Component {...pageProps} />)}
        </Layout>
      </CssBaseline>
    </UserProvider>

  )
}
