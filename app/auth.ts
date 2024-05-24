import prisma from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],
  events: {
    createUser: async (message) => {
      const userId = message.user.id;
      const email = message.user.email;
      if (!userId || !email) return;
      const stripeCustomer = await stripe.customers.create({
        email,
      });

      await prisma.user.update({
        where: { id: userId },
        data: {
          stripeCustomerId: stripeCustomer.id,
        },
      });
    },
  },
});
