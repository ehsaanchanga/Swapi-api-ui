import Router from 'next/router';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      setIsLoading(true);
    });

    Router.events.on('routeChangeComplete', (url) => {
      setIsLoading(false);
    });

    Router.events.on('routeChangeError', (url) => {
      setIsLoading(false);
    });
  }, [Router]);
  return (
    <>
      <Layout>
        <div className='w-5/6 m-auto'>
          {isLoading && <Loader />}
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}
