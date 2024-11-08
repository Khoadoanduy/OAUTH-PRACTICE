import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const authOptions ={
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            }
        }),
        GoogleProvider({
            clientID: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ]
}

export default NextAuth(authOptions)
