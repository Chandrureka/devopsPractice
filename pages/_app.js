// src/pages/_app.js

import Layout from '../components/Layout';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  const { session, ...rest } = pageProps;
  return (
    <SessionProvider session={session}>
      <Layout>
       <Component {...pageProps} />
      </Layout>
     
    </SessionProvider>
    
  );
}

export default MyApp;

