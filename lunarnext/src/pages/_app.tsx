import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  const [currUser, setCurrUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

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
  }, []);

 

  return (
      <Component {...pageProps} currUser={currUser} loggedIn={loggedIn}/>
  )
}

export default MyApp;

// ++++ SESSION STUFF ++++

// import { SessionProvider, useSession } from "next-auth/react"
// import type { Session } from "next-auth"

// pass into appprops
// <{ session: Session }>

// <SessionProvider session={session}>
// </SessionProvider>