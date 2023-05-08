import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ChatGPT from '../components/ChatGPT';
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  const [currUser, setCurrUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  // const [admin, setAdmin] = useState(false)

  useEffect(() => {
    fetch('/check')
      .then((r) => r.json())
      .then((data) => {
        setLoggedIn(data.loggedIn);
      });
  }, []);

  // useEffect(() => {
  //   if (currUser) {
  //     setAdmin(currUser.is_admin);
  //   }
  // }, [currUser]);

  useEffect(() => {
    fetch('/logged_user')
      .then((r) => {
        if (!r.ok) {
          throw new Error(`HTTP error ${r.status}`);
        }
        return r.json();
      })
      .then((data) => {
        console.log(data);
        if (!data.error) {
          setCurrUser(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching logged_user:', error);
      });
  }, []);
 

  return (
    <Layout>
      <Component {...pageProps} currUser={currUser} loggedIn={loggedIn}/>
      <ChatGPT/>
    </Layout>
  )
}

export default MyApp;