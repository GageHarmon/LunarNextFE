import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavbarProps {
  admin?: boolean;
}

function Navbar({ admin }: NavbarProps) {

  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

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
          <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center text-sm font-medium text-white rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0"
          >
            <span className="sr-only">Open user menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className={`absolute z-10 mt-2 bg-transparent rounded-lg ${menuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col space-y-2 mt-4 font-medium rounded-lg bg-gradient-to-tr from-navpurp to-lightpurp dark:bg-gray-800 dark:border-gray-700">
              <li>
                <Link href="/"
                  className="block py-2 pl-3 pr-4 text-white ">
                    Home
                </Link>
              </li>
              <li>
                <Link href="/profile"
                  className="block py-2 pl-3 pr-4 text-white ">
                    Profile
    
                </Link>
              </li>
              <li>
                <Link href="/dashboard"
                  className="block py-2 pl-3 pr-4 text-white ">
                    Dashboard
    
                </Link>
              </li>
              {admin ? (
                <li>
                  <Link href="/tickets"
                    className="block py-2 pl-3 pr-4 text-white ">
                      Tickets
                  </Link>
                </li>
              ) : null}
              <li>
                <Link href="/about"
                  className="block py-2 pl-3 pr-4 text-white ">
                    About
    
                </Link>
              </li>
                <button type="submit" className="text-white  px-5 py-2.5 text-center mr-2 mb-2"
                onClick={handleLogout}
                >
                  Logout
                </button>
            </ul>
          </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;