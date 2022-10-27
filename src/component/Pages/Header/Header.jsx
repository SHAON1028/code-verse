import { Navbar,Button, Tooltip, Flowbite, DarkThemeToggle } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo.png'
import { AuthContext } from '../../context/UserContext';

const Header = () => {
  const { user,logOut} = useContext(AuthContext);
  const [theme,setTheme] = useState("light")
useEffect(()=>{
  if(theme==="dark"){
    document.documentElement.classList.add("dark")
  }
  else {
    document.documentElement.classList.remove("dark")
  }
},[theme])
const handleThemeSwitch = ()=>{
  setTheme(theme === "dark" ? "light" : "dark")
}
  
  const handleLogOut = ()=>
{
  logOut()
  .then(()=>{})
  .catch(error=>console.log(error))
}
  return (
    <div className='bg-gray-600'>
      <Navbar 
    fluid={true}
    rounded={true}
  >
    <NavLink to="/">
<div className='flex'>
<img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7jbSmbMMNzJJ9kwXZRk2mPutfg0fnSiuROg&usqp=CAU"
        className="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-bold text-rose-700 dark:text-white">
       Code Verse
      </span>
</div>
    </NavLink>
    <div className="flex md:order-2">
    <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100 m-1">
	<span>light</span>
	<span className="relative">
		<input onClick={handleThemeSwitch} id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-700 peer-checked:dark:bg-violet-700"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
	</span>
	<span>dark</span>
</label>
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
<div className='m-2'>

</div>
  <Link>
   <Button variant="light" className="ms-2" onClick={handleLogOut}  >
        Log out
      </Button>
   </Link>
  
  </> :
  <>
      <Link to="/login">
    <button className="self-center px-8 py-3 rounded text-lg dark:text-white" >Sign in</button>
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
      className="text-lg  dark:text-white"
        to="/"
        ctive="true"
      >
        Home
      </NavLink>
      <NavLink to="/courses" className="text-lg  dark:text-white">

        Courses
      </NavLink>
      
      <NavLink to="/faq" className="text-lg dark:text-white">
        FAQ
      </NavLink>
      <NavLink to="/blog" className="text-lg  dark:text-white">
        Blog
      </NavLink>
      {/* <Button onClick={handleThemeSwitch}>Dark</Button> */}

    </Navbar.Collapse>
  </Navbar>
    </div>
  );
};

export default Header;