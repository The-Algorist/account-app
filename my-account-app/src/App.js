import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Transactions from './components/Transactions';
import AccountSettings from './components/AccountSettings';
import { ClerkProvider, UserButton, SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp, } from "@clerk/clerk-react";
 
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
 

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
     
        <Route path="/login" element={<SignIn />} />
        
        <Route path="/register" element={<SignUp />} />

        <Route path="/transactions" element={
          <>
            <SignedIn>
              <Transactions />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
          } />
       
        <Route path="/account-settings" element={<UserButton />} />
      </Routes>
    </Router>
    </ClerkProvider>
   
  );
}

export default App;