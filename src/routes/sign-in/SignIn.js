import React from 'react';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>Signin</div>
      <button onClick={logGoogleUser}>Sign in with google Popup</button>
    </>
  );
};

export default Signin;
