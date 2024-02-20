
import Layout from '../components/Layout'
import '../styles/globals.css'
import Loading from './loading'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import React from 'react'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [route, setRoute] = React.useState(router.pathname)
  const [loading, setLoading] = React.useState(false)

  useEffect(() => {
    const routeEventStart = (url) => {
      // Check if the route change is to the current search page
      const isSearchPage = url.startsWith(`/search`);

      // Show loading only for the search page
      if (isSearchPage) {
        setLoading(true);
      }
    };

    const routeEventEnd = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', routeEventStart);
    router.events.on('routeChangeComplete', routeEventEnd);

    return () => {
      router.events.off('routeChangeStart', routeEventStart);
      router.events.off('routeChangeComplete', routeEventEnd);
    };
  }, [router.pathname]); 

  return (
  <Layout>
  {loading ? (
        <Loading query={router.pathname}/>
      ) : (
        <Component {...pageProps} />
      )}
  </Layout>
  )
}

export default MyApp
