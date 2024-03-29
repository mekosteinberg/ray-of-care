import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Layout from '../components/Layout'
import CssBaseline from '@mui/material/CssBaseline';
import UserProfileProvider from '../components/UserProfileProvider';

//

export default function App({ Component, pageProps }) {
  //getLayout is saying if the Component has a getLayout property then use it, otherwise use a passthrough
  const getLayout = Component.getLayout || ((page) => page)

  return (
    // checks if someone is a user and logged in
    <UserProvider>
      {/* gets user roles for the logged in user */}
      <UserProfileProvider>
        {/* Mui override for global CSS */}
        <CssBaseline>
          {/* provides header and footer */}
          <Layout>
            {/* this is each page */}
            {getLayout(<Component {...pageProps} />)}
          </Layout>
        </CssBaseline>
      </UserProfileProvider>
    </UserProvider>

  )
}
