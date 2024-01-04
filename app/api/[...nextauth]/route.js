import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import { connectToDB } from '@utils/database';

console.log({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
});

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ], 
    async session({ session }){

    },
    async signIn({ profile }){
        try {
            // serverless -> lambda (opens only when it gets called)    
            await connectToDB();

            // check if a user already exists

            // if not, create a new user and save to the DB

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }


    }
})

export { handler as GET, handler as POST }