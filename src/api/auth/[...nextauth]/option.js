import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
      CredentialsProvider({
        id: "credentials",
        name: "credentials",
        credentials: {
          email: { label: "email", type: "text"},
          password: { label: "password", type: "password" }
        },
        async authorize(credentials, req) {   
          const data = {
            email: credentials?.email,
            password: credentials?.password
          }     

          const res = await fetch(String(process.env.NEXT_PUBLIC_API) + "/user/login",{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            }
          })

          const user = await res.json()
          
          if (res.ok && user) {
            return user
          }
          
          throw new Error(user.message)
        }
      }),
      CredentialsProvider({
        id: "reset-password",
        name: "reset-password",
        credentials: {
          token: { label: "token", type: "text"},
          password: { label: "password", type: "password" },
          confirmPassword: { label: "confirmPassword", type: "password" }
        },
        async authorize(credentials) {
          const data = {
            token: credentials?.token,
            password: credentials?.password,
            confirmPassword: credentials?.confirmPassword
          }

          const res = await fetch(String(process.env.NEXT_PUBLIC_API) + "/user/password/recovery", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          })

          const user = await res.json()
          
          if (res.ok && user) {
            return user
          }
          
          throw new Error(user.message)
        }
      }),
      CredentialsProvider({
        id: "token",
        name: "token",
        credentials: {
          id: { label: "id", type: "text"},
          token: { label: "token", type: "text"},
          role: { label: "role", type: "text" },
          name: { label: "name", type: "text" }
        },
        async authorize(credentials) {
          return credentials
        }
      })
    ],
    pages: {
      signIn: '/'
    },
    callbacks: {
      async jwt({ token, user, account }) {
        if (account) {
          token.accessToken = user.token
          token.user_role = user.role
          token.user_id = user.id
        }
        return token
      },
      async session({ session, token }) {
        session.user.token = token.accessToken
        session.user.role = token.user_role
        session.user.id = token.user_id
        return session
      }
    }
  }