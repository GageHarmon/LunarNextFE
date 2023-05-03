import { useRouter } from 'next/router';
import Link from 'next/link';

interface NavbarProps {
  admin: boolean;
}

const Navbar: React.FC = ({admin}: NavbarProps) => {
  const router = useRouter();

  function handleLogout(e) {
    e.preventDefault();
    fetch("/logout",{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    router.push('/')
  }

  return (
    <header className="fixed top-0 left-0 right-0">
      <nav className="bg-gradient-to-tr from-navpurp to-lightpurp border-gray-200 dark:bg-gray-900 rounded-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <Link href="/"
                 className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">
                  LunarBreeze
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:w-auto">
              <ul className="flex items-center justify-center space-x-4">
                <li>
                  <Link href="/profile" 
                    className="text-white bg-gradient-to-bl from-lightpurp to-navpurp hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                      Profile
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard"
                     className="text-white bg-gradient-to-bl from-lightpurp to-navpurp hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                      Dashboard
                  </Link>
                </li>
                {/* {admin ? */}
                <li>
                  <Link href="/tickets"
                     className="text-white bg-gradient-to-bl from-lightpurp to-navpurp hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                      Tickets
                  </Link>
                </li>
               {/* : null} */}
                <li>
                  <Link href="/about"
                     className="text-white bg-gradient-to-bl from-lightpurp to-navpurp hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                      About
                  </Link>
                </li>
            </ul>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <form onSubmit={handleLogout} className='inline'>
              <button type="submit" className="text-white bg-gradient-to-bl from-lightpurp to-navpurp hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;



// ++++ MORE SESSION STUFF ++++

// import { signIn, signOut, useSession } from "next-auth/react";

  // --- goes under the react.FC ---
  // const { data: session, status } = useSession();
  // const loading = status === "loading";

// {session ? (
//   <li className="flex items-center space-x-4">
//     <span className={styles.signedInText}>
//       <strong>
//         {session.user.email ?? session.user.name}
//       </strong>
//     </span>
//     <button
//       className="px-4 py-2 text-white bg-gradient-to-br from-lightpurp to-black rounded shadow-md hover:bg-blue-800 md:hover:bg-blue-700 md:hover:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//       onClick={(e) => {
//         e.preventDefault();
//         signOut();
//       }}
//     >
//       Sign out
//     </button>
//   </li>
// ) : (
//   <li>
//     <button
//       className="px-4 py-2 text-white bg-gradient-to-br from-lightpurp to-black rounded shadow-md hover:bg-blue-800 md:hover:bg-blue-700 md:hover:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//       onClick={(e) => {
//         e.preventDefault();
//         signIn();
//       }}
//     >
//       OAuth
//     </button>
//   </li>
// )}


// +++++ ACCOUNT AVATAR DROPDOWN MENU +++++

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