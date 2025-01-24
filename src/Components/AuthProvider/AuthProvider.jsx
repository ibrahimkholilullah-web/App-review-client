import React, { useEffect, useState, createContext } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

// Create the AuthContext
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 

  const createUser = (email, password) => {
    setLoading(true); 
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email,password)
  }
  const logoOut = () =>{
    setLoading(true)
    return signOut(auth)
  }
  const googleSignUp = () =>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }
  const updateSignleUser =async (name,photo) =>{
    setLoading(true)
   return await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
    })
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); 
      setLoading(false); 
    });

    // Cleanup the observer on component unmount
    return () => {
      unsubscribe();
    };
  }, []); 
  const userInfo = {
    user,
    logoOut,       
    loading,    
    createUser,
    signInUser,
    updateSignleUser,
    googleSignUp
  };

  // Render the AuthContext provider
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
