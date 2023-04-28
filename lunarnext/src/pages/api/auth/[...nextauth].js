import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Providers.Credentials({
    //   name: "Email and Password",
    //   credentials: {
    //     username: { label: "Username", type: "text" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     // Call your backend API to authenticate the user
    //     const response = await fetch("http://127.0.0.1:5555/api/login", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(credentials),
    //     });

    //     if (response.ok) {
    //       const user = await response.json();
    //       return { id: user.id, email: user.email };
    //     } else {
    //       return null;
    //     }
    //   },
    // }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,

//   callbacks: {
//   //   async signIn(user, account, profile) {
//   //     const res = await fetch("http://127.0.0.1:5555/api/login/google", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({
//   //         access_token: account.access_token,
//   //         id_token: account.id_token,
//   //         profile,
//   //       }),
//   //     });

//   //     if (res.status === 200) {
//   //       return true;
//   //     } else {
//   //       return false;
//   //     }
//   // },
//   async jwt(token, user) {
//     if (user) {
//       token.id = user.id;
//       token.email = user.email;
//     }
//     return token;
//   },
//   async session(session, token) {
//     session.user.id = token.id;
//     session.user.email = token.email;
//     return session;
//   },
// },
//   adapter: Adapters.Prisma.Adapter({ prisma }),
//     pages: {
//       signIn: "/login",
//     },
// })
})