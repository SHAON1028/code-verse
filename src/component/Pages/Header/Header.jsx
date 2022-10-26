import { Navbar,Button, Tooltip } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo.png'
import { AuthContext } from '../../context/UserContext';

const Header = () => {
  const { user,logOut} = useContext(AuthContext);
  const handleLogOut = ()=>
{
  logOut()
  .then(()=>{})
  .catch(error=>console.log(error))
}
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
{
  user?.uid ? 
  <>

    <Tooltip content={user.displayName}>
    <img
       src={user.photoURL}
      style={{height:'40px'}}
      className="mr-3 h-6 sm:h-9 relative mx-auto rounded-3xl overflow-hidden"
      alt=""
      referrerPolicy="no-referrer"
    />
</Tooltip>
  <Link>
   <Button variant="light" className="ms-2" onClick={handleLogOut}  >
        Log out
      </Button>
   </Link>
  
  </> :
  <>
      <Link to="/login">
    <button className="self-center px-8 py-3 rounded text-lg" >Sign in</button>
    </Link>
   <Link to="/register">
   <Button className="text-lg">
        Sign Up
      </Button>
   </Link>
  
  </>
}
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