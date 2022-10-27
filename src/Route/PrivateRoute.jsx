import { Button, Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../component/context/UserContext';

const PrivateRoute = ({children}) => {

    const location = useLocation()
    const {user,loading} = useContext(AuthContext)

    if(loading){
        return   <div className='w-full mx-auto'>
              <Button>
    <Spinner  color="failure" aria-label="Spinner button example" />
    <span className="pl-3">
      Loading...
    </span>
  </Button>
        </div>
    }

    if(user && user.uid){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;