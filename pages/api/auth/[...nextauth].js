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
      authorize: async (_credentials) => {
        return null; // Skip custom logic
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Other providers here
  ],
  pages: {
    signIn: 'https://52.7.190.93:3000/auth/signin', // Points to the custom sign-in page you created
  },
  // Other NextAuth.js configurations
});
