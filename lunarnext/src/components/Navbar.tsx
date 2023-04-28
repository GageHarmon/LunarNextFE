import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <header className="fixed top-0 left-0 right-0">
      <nav className="bg-lightpurp border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <a
              href="/"
              className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white"
            >
              LunarBreeze
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:w-auto">
            <ul className="flex items-center justify-center space-x-4">
              <li>
              <a href="/" className="px-4 py-2 text-white bg-gradient-to-br from-lightpurp to-black rounded shadow-md hover:bg-blue-800 md:hover:bg-blue-700 md:hover:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</a>
              </li>
              <li>
              <a href="/Home" className="px-4 py-2 text-white bg-gradient-to-br from-lightpurp to-black rounded shadow-md hover:bg-blue-800 md:hover:bg-blue-700 md:hover:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
              </li>
              <li>
              <a href="/Dashboard" className="px-4 py-2 text-white bg-gradient-to-br from-lightpurp to-black rounded shadow-md hover:bg-blue-800 md:hover:bg-blue-700 md:hover:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dashboard</a>
              </li>
              <li>
              <a href="/About" className="px-4 py-2 text-white bg-gradient-to-br from-lightpurp to-black rounded shadow-md hover:bg-blue-800 md:hover:bg-blue-700 md:hover:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              {session ? (
                <li className="flex items-center space-x-4">
                  <span className={styles.signedInText}>
                    <strong>
                      {session.user.email ?? session.user.name}
                    </strong>
                  </span>
                  <button
                    className="px-4 py-2 text-white bg-gradient-to-br from-lightpurp to-black rounded shadow-md hover:bg-blue-800 md:hover:bg-blue-700 md:hover:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                  >
                    Sign out
                  </button>
                </li>
              ) : (
                <li>
                  <button
                    className="px-4 py-2 text-white bg-gradient-to-br from-lightpurp to-black rounded shadow-md hover:bg-blue-800 md:hover:bg-blue-700 md:hover:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={(e) => {
                      e.preventDefault();
                      signIn();
                    }}
                  >
                    OAuth
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;



// // Navbar.tsx
// // import Link from "next/link"
// import { signIn, signOut, useSession } from "next-auth/react"
// import styles from "./Navbar.module.css"

// const Navbar = () => {
//     const { data: session, status } = useSession()
//     const loading = status === "loading"

// return (
// <header className="fixed top-0 left-0 right-0">
//     <nav className="bg-lightpurp border-gray-200 dark:bg-gray-900">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//             <div className="flex items-center">
//                 <a href="/" className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">LunarBreeze</a>
//             </div>
//             <div className="hidden md:flex md:items-center md:justify-center md:w-auto">
//             <ul className="flex items-center justify-center space-x-4">
                // <li>
                // <a href="/" className="px-4 py-2 text-white bg-gradient-to-br from-lightpurp to-black rounded shadow-md hover:bg-blue-800 md:hover:bg-blue-700 md:hover:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</a>
                // </li>
                // <li>
                // <a href="/Home" className="px-4 py-2 text-white bg-gradient-to-br from-lightpurp to-black rounded shadow-md hover:bg-blue-800 md:hover:bg-blue-700 md:hover:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                // </li>
                // <li>
                // <a href="/Dashboard" className="px-4 py-2 text-white bg-gradient-to-br from-lightpurp to-black rounded shadow-md hover:bg-blue-800 md:hover:bg-blue-700 md:hover:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dashboard</a>
                // </li>
                // <li>
                // <a href="/About" className="px-4 py-2 text-white bg-gradient-to-br from-lightpurp to-black rounded shadow-md hover:bg-blue-800 md:hover:bg-blue-700 md:hover:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                // </li>
//             </ul>
//             </div>
//         </div>
//         {/* <label className="relative inline-flex items-center mb-4 cursor-pointer">
//             <input
//                 type="checkbox"
//                 value=""
//                 className="sr-only peer"
//                 checked={isDarkMode}
//                 onChange={toggleDarkMode}
//             />
//             <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//             <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
//         </label> */}
//         <div className={styles.signedInStatus}>
//         <p
//           className={`nojs-show ${
//             !session && loading ? styles.loading : styles.loaded
//           }`}
//         >
//           {!session && (
//             <>
//               <span className={styles.notSignedInText}>
//                 You are not signed in
//               </span>
//               <a
//                 href={`/api/auth/signin`}
//                 className={styles.buttonPrimary}
//                 onClick={(e) => {
//                   e.preventDefault()
//                   signIn()
//                 }}
//               >
//                 Sign in
//               </a>
//             </>
//           )}
//           {session?.user && (
//             <>
//               {session.user.image && (
//                 <span
//                   style={{ backgroundImage: `url('${session.user.image}')` }}
//                   className={styles.avatar}
//                 />
//               )}
//               <span className={styles.signedInText}>
//                 <small>Signed in as</small>
//                 <br />
//                 <strong>{session.user.email ?? session.user.name}</strong>
//               </span>
//               <a
//                 href={`/api/auth/signout`}
//                 className={styles.button}
//                 onClick={(e) => {
//                   e.preventDefault()
//                   signOut()
//                 }}
//               >
//                 Sign out
//               </a>
//             </>
//           )}
//         </p>
//       </div>
//     </nav>
// </header>
// )}
// export default Navbar;


{/* <div className="flex items-center md:order-2">
    <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="" alt="user photo"/>
    </button>
    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">

        <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
        </li>
        <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
        </li>
        <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
        </li>
        </ul>
    </div>

    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
</div> */}