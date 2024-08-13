import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/onboarding",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile(profile) {
        return {
          id: profile.sub as string,
          name: profile.name as string,
          email: profile.email as string,
          image: profile.picture as string,
          role: profile.role || "user",
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      // console.log(token, "token.sub");
      const dbUser = await db.user.findUnique({
        where: { email: token.email as string },
      });
      if (dbUser) {
        return { ...token, ...dbUser };
      }
      return token;
    },
    async session({ session, token }) {
      // console.log(session, token);
      return {
        ...session,
        user: { ...session.user, ...token },
      };
    },
  },
};
