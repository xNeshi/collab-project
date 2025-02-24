import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: { access_type: "offline", prompt: "consent" },
        scope: "openid profile email",
      },
    }),
  ],
  callbacks: {
    async signIn({ user, profile }) {
      const { sub, login, bio } = profile!;
      const { name, email, image } = user;
      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_ID_QUERY, { id: sub });

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          _id: sub,
          id: sub,
          name,
          username: login,
          email,
          image,
          bio: bio || "",
        });
      }

      return true;
    },

    async jwt({ token, profile, account }) {
      if (profile && account) {
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_ID_QUERY, {
            id: profile.sub,
          });

        token.id = user?.id;
      }
      return token;
    },

    async session({ session, token }) {
      Object.assign(session, { id: token.id });
      return session;
    },
  },
});
