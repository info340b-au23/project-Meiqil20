import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';

export function LoginPage() {
//   const currentUser = props.currentUser;
//   const loginFunction = props.loginCallback;
  
  const auth = getAuth(); //the authenticator

  const configObj = {
    signInOptions: [
      { 
        provider: EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: true,
      },
      {
        provider: GoogleAuthProvider.PROVIDER_ID
      }
    ],
    signInFlow: 'popup',
    callbacks: {
      signInSuccessWithAuthResult: () => false //don't do anything special on signin
    },
    credentialHelper: 'none'
  }

  return (
    <div className="card bg-light">
      <div className="container card-body">
        <StyledFirebaseAuth firebaseAuth={auth} uiConfig={configObj} />
 
        {/* <p className="lead">Pick a user:</p>
        <Dropdown>
...
		</Dropdown> */}
      </div>
    </div>
  )
}

