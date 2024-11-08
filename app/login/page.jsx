"use client"

import { signIn } from 'next-auth/react';
import { useState } from "react";

export default function signInPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignIn = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials',{
            redirect: true,
            email,
            password
        })
    }
    return(
        <div>
            <h1> Sign In </h1>
            <form onSubmit={handleSignIn}>
                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                 />
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={ (e) => setPassword(e.target.password)}
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}