import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ChatGPT from '../components/ChatGPT';
import { useUserStore } from '../../store/userdata';
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
    const {
      currUser,
      setCurrUser,
      loggedIn,
      setLoggedIn,
      admin,
      setAdmin,
    } = useUserStore();

  useEffect(() => {
    fetch('/check')
      .then((r) => r.json())
      .then((data) => {
        setLoggedIn(data.loggedIn);
      });
  }, []);

  useEffect(() => {
    fetch('/logged_user')
      .then((r) => {
        if (!r.ok) {
          throw new Error(`HTTP error ${r.status}`);
        }
        return r.json();
      })
      .then((data) => {
        if (!data.error) {
          setCurrUser(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching logged_user:', error);
      });
  }, [setCurrUser]);

  useEffect(() => {
    if (currUser) {
      setAdmin(currUser.is_admin);
    }
  }, [currUser]);
 

  return (
    <Layout admin={admin}>
      <Component {...pageProps} currUser={currUser} loggedIn={loggedIn} admin={admin}/>
      <ChatGPT/>
    </Layout>
  )
}

export default MyApp;