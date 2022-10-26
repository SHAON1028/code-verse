import { Navbar,Button } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo.png'

const Header = () => {
  return (
    <Navbar
    fluid={true}
    rounded={true}
  >
    <NavLink to="/">
<div className='flex'>
<img
        src="https://flowbite.com/docs/images/logo.svg"
        className="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Flowbite
      </span>
</div>
    </NavLink>
    <div className="flex md:order-2">
    <button className="self-center px-8 py-3 rounded text-lg" >Sign in</button>
      <Button className="text-lg">
        Sign Up
      </Button>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse >
      <NavLink
      className="text-lg"
        to="/"
        ctive="true"
      >
        Home
      </NavLink>
      <NavLink to="/courses" className="text-lg">

        Courses
      </NavLink>
      <NavLink to="/faq" className="text-lg">
        FAQ
      </NavLink>
      <NavLink to="/blog" className="text-lg">
        Blog
      </NavLink>

    </Navbar.Collapse>
  </Navbar>
  );
};

export default Header;