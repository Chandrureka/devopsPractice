// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
// Import other providers similarly if you are using multiple providers

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'your-username' },
        password: { label: 'Password', type: 'password', placeholder: 'your-password' },
      },
      // No authorization logic; it will be handled on your custom sign-in page
      authorize: async (credentials) => {
        const { username, password } = credentials;

        // Temporary static user validation for development purposes
        if (username === 'chan' && password === 'chan') {
          return { id: 1, name: "chan", email: "testuser@example.com" };
        }

        // If the credentials do not match, return null, which will trigger an error
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Other providers here
  ],
  pages: {
    signIn: 'http://52.7.190.93/auth/signin', // Points to the custom sign-in page you created
  },
  // Other NextAuth.js configurations
});
