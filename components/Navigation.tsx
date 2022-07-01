import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import NavLink from './NavLink';

const Navigation = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('darkMode') as string) === true) {
      setDarkMode(true);
      document.body.classList.add('dark');
    }
  }, []);

  const themeToggle = () => {
    // const darkMode = localStorage.getItem("darkMode")
    setDarkMode((prevValue) => !prevValue);
    localStorage.setItem('darkMode', String(!darkMode));

    document.body.classList.toggle('dark');
    document.documentElement.style.colorScheme = !darkMode ? 'dark' : 'light';
  };

  const burgerClickHandler = () => {
    setMobileNav((prevValue) => !prevValue);
    document.querySelector('.navigation__hiddenNav')?.classList.toggle('shown');
    document
      .querySelector('.navigation__wrapper')
      ?.classList.toggle('navigation__wrapper-fixed');
    document.getElementById('burger-container')?.classList.toggle('open');
  };
  return (
    <header className="navigation__wrapper">
      <div className="limit-width-lg navigation">
        <nav className="navigation__mainNav">
          <ul className="navigation__navlinks">
            <li>
              <NavLink exact className="navigation__navlink" href="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navigation__navlink" href="/projects">
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink exact className="navigation__navlink" href="/blog">
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink className="navigation__navlink" href="/blog/uses">
                Uses
              </NavLink>
            </li>
            <li>
              <NavLink className="navigation__navlink" href="/#contacts">
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Nav */}
        <nav className="navigation__hiddenNav">
          <ul className="navigation__hiddenNav__navlinks">
            <li>
              <Link href="/">
                <a className="navigation__hiddenNav__navlink">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className="navigation__hiddenNav__navlink">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className="navigation__hiddenNav__navlink">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/uses">
                <a className="navigation__hiddenNav__navlink">Uses</a>
              </Link>
            </li>

            <li>
              <a
                className="navigation__hiddenNav__navlink"
                href="/samip-poudel-resume.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <button
          aria-label="toggle theme"
          onClick={themeToggle}
          className="navigation__theme"
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
      <button
        aria-label="toggle menu"
        id="burger-container"
        onClick={burgerClickHandler}
        tabIndex={0}
      >
        {showMobileNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        )}
      </button>
    </header>
  );
};

export default Navigation;
