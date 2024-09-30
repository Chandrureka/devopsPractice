import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const SignInButton = () => {
  const { data: session, status } = useSession();

  console.log('Session:', session);
  console.log('Status:', status);
  const handleSignIn = () => {
    // Redirect to the custom sign-in page
    signIn('credentials', { callbackUrl: 'https://52.7.190.93:3000/auth/signin' });
  };


  return (
    <div>
      {session ? (
        <button  className="bg-blue-700 text-white px-1 py-1 rounded-sm" onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button className="bg-blue-700 text-white px-1 py-1 rounded-sm" onClick={handleSignIn}>Sign In</button>
      )}
    </div>
  );
};

export default SignInButton;
