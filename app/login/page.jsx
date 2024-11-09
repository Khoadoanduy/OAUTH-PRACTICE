"use client";

import { signIn } from 'next-auth/react';
import { useState } from "react";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSignIn = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: true,
            email,
            password
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center">Sign In</h1>
                <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 font-semibold text-gray-900 bg-white rounded-md hover:bg-gray-300 focus:outline-none"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
