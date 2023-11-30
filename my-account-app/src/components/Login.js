import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { 
  SignedIn,
  SignedOut,
  UserButton,
   } from "@clerk/clerk-react";




function Login() {
  
  

  return (
    
   
    <>
    <h1>Protected page</h1>
    <UserButton />
  </>
   
   
  );
}

export default Login;
