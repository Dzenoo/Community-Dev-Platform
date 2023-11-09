import User from "@/library/models/user";
import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials";
import { connectToDb } from "@/library/mongoose";
import { comparePassword } from "@/library/utility";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials): Promise<any> => {
        try {
          await connectToDb();

          const user = await User.findOne({ email: credentials?.email });

          if (!user) {
            throw new Error("No user found!");
          }

          const isValid = await comparePassword(
            credentials?.password,
            user.password
          );

          if (!isValid) {
            throw new Error("Invalid password! Try again!");
          }

          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
          };
        } catch (error) {
          console.log("Error checking");
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session }: { session: any }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
