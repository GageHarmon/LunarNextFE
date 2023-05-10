import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { useUserStore } from '../../store/userdata';

export default function LaunchPage() {
  const router = useRouter();
  const currUser = useUserStore((state) => state.currUser);
  const loggedIn = useUserStore((state) => state.loggedIn);
  const setCurrUser = useUserStore((state) => state.setCurrUser);
  const setLoggedIn = useUserStore((state) => state.setLoggedIn);


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState(''); 
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupFirstName, setSignupFirstName] = useState('');
  const [signupLastName, setSignupLastName] = useState('');
  const [showSignupForm, setShowSignupForm] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
      first_name: first_name,
      last_name: last_name,
    };
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const user = await response.json();
      setCurrUser(user);
      setLoggedIn(true);
      router.push('/');
    } else {
      alert('Invalid username or password');
    }
  }

  async function handleSignup(e) {
    e.preventDefault();
    const data = {
      username: signupUsername,
      password: signupPassword,
      email: signupEmail,
      first_name: signupFirstName,
      last_name: signupLastName,
      // is_admin: isAdmin
    };
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('User created successfully. You can now log in.');
    } else {
      alert('Error creating user. Please try again.');
    }
  }

  function toggleSignupForm() {
    setShowSignupForm(!showSignupForm);
  }

  useEffect(() => {
    if (loggedIn) {
      router.push('/');
    }
  }, [loggedIn, router]);

  if (loggedIn) {
    return <div>Redirecting...</div>;
  } else {

  return (
  <Layout>
    <div className='bg-transparent p-20 rounded-lg'>
    <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          objectFit: "cover",
          zIndex: "-1",
        }}
      >
        <source src="/moonbeam.mp4" type="video/mp4" />
        {/* <a href="https://www.vecteezy.com/video/3194533-moonbeam-over-the-river-and-mountains">Moonbeam Over The River And Mountains Stock Videos by Vecteezy</a> */}
      </video>
      {showSignupForm ? (
        <>
          <h2 className='text-3xl font-bold text-lightpurp mb-8'>Sign up</h2>
          <div className='flex flex-col space-y-4'>
          <form onSubmit={handleSignup}>
            <div className='mb-4'>
              <label className='block text-lightpurp font-bold mb-2' htmlFor='signupUsername'>
                New Username:
              </label>
              <input
                className='border border-lightpurp rounded w-full py-1 px-3 text-black leading-tight'
                type="text"
                value={signupUsername}
                onChange={(e) => setSignupUsername(e.target.value)}
                placeholder="New Username"
              />
            </div>
            <div className='mb-4'>
              <label className='block text-lightpurp font-bold mb-2' htmlFor='signupPassword'>
                New Password:
              </label>
              <input
                className='border border-lightpurp rounded w-full py-1 px-3 text-black leading-tight'
                type="password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                placeholder="New Password"
              />
            </div>
            <div className='mb-4'>
              <label className='block text-lightpurp font-bold mb-2 mt-4' htmlFor='signupEmail'>
                Email:
              </label>
              <input
                className='border border-lightpurp rounded w-full py-1 px-3 text-black leading-tight'
                type="email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className='mb-4'>
              <label className='block text-lightpurp font-bold mb-2 mt-4' htmlFor='signupFirstName'>
                First Name:
              </label>
              <input
                className='border border-lightpurp rounded w-full py-1 px-3 text-black leading-tight'
                type="text"
                value={signupFirstName}
                onChange={(e) => setSignupFirstName(e.target.value)}
                placeholder="First Name"
              />
            </div>
            <div className='mb-4'>
              <label className='block text-lightpurp font-bold mb-2 mt-4' htmlFor='signupLastName'>
                Last Name:
              </label>
              <input
                className='border border-lightpurp rounded w-full py-1 px-3 text-black leading-tight'
                type="text"
                value={signupLastName}
                onChange={(e) => setSignupLastName(e.target.value)}
                placeholder="Last Name"
              />
            </div>
            <input
              className='text-white bg-transparent hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-2 border-lightpurp'
              id='signup-btn'
              type='submit'
              value='Sign up'
            />
          </form>
          <button
            className='text-white bg-transparent hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-2 border-lightpurp'
            onClick={toggleSignupForm}
          >
            Back to Login
          </button>
          </div>
        </>
      ) : (
        <>
          <h2 className='text-3xl font-bold text-lightpurp mb-8'>Log in</h2>
          <div className='flex flex-col space-y-4'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-lightpurp font-bold mb-2' htmlFor='email'>
                Username:
              </label>
              <input
                className='border border-lightpurp rounded w-full py-1 px-3 text-black leading-tight'
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div className='mb-4'>
              <label className='block text-lightpurp font-bold mb-2' htmlFor='password'>
                Password:
              </label>
              <input
                className='border border-lightpurp rounded w-full py-1 px-3 text-black leading-tight'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <input
              className='text-white bg-transparent hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-2 border-lightpurp'
              id='submit-btn'
              type='submit'
              value='Login'
            />
          </form>
          <p className='text-navpurp font-bold mb-2'>Don&apos;t have an account?</p>
          <button
            className='text-white bg-transparent hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-2 border-lightpurp'
            onClick={toggleSignupForm}
          >
            Sign up
          </button>
          </div>
        </>
      )}
    </div>
    </Layout>
  )}}
