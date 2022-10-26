import React, { createContext, useEffect, useState } from 'react';


import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.init.config';
const auth = getAuth(app);

export const AuthContext = createContext();
const UserContext = ({ children }) => {

const googleProvider = new GoogleAuthProvider()   
const gitProvider = new GithubAuthProvider(); 
const [user, setUser] = useState({});
const [loading,setLoading] = useState(true)
// 1.Create User Email Pass
const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
//2. Update profile

const updateUserProfile = (profile)=>{
    return updateProfile(auth.currentUser,profile)
}



// 3.Google SignIn 
const signInWithGoogle = ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}
// 4.Github SignIn 
const signInWithGithub = ()=>{
    setLoading(true)
    return signInWithPopup(auth,gitProvider)
}

// 5.Log Out

const logOut = ()=>{
    setLoading(true)
   return signOut(auth)
}

//6.Login with Password
const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// -------------useEffect--------------
useEffect(()=>{
   
  const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })

    return()=>{
     
        unsubscribe()
    }
},[])

// -----------------value/info pass----------
const authInfo = {user,createUser,updateUserProfile,signInWithGoogle,logOut,signIn,loading,signInWithGithub}
//   ------------return----------------
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;