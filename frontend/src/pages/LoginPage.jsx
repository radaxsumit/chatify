import React from 'react'
import {useAuthStore} from "../store/useAuthStore.js";

const LoginPage = () => {
    const {authUser, isloggedin, login} = useAuthStore();
    return (
        <div className="min-h-screen text-white flex items-center justify-center relative overflow-hidden">
            <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-6">

                {/* Logo */}
                <div
                    className="text-2xl font-black tracking-tight bg-gradient-to-r from-[#460df2] to-[#7c4dff] bg-clip-text text-transparent">
                    Chatify
                </div>

                {/* Status */}
                <div className="hidden md:flex items-center gap-6">
                    <span
                        className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/40">System Status</span>

                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span
                            className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/40">Operational</span>
                    </div>
                </div>
            </header>

            {/* LOGIN CARD */}
            <div className="relative z-10 w-full max-w-md px-8">

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

                    {/* Heading */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold">Welcome Back</h1>
                        <p className="text-white/50 text-sm">Login to continue</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5">

                        {/* Email */}
                        <div>
                            <label className="text-xs text-white/50">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full mt-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50"/>
                        </div>
                        {/* Password */}
                        <div>
                            <label className="text-xs text-white/50">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full mt-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50"/>
                        </div>

                        {/* Button */}
                        <button
                            onClick={login}
                            type="submit"
                            className="w-full py-3 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-violet-500 hover:scale-[1.02] active:scale-95 transition-all">Sign
                            In
                        </button>

                    </form>

                    {/* Divider */}
                    <div className="my-6 text-center text-xs text-white/40">
                        OR CONTINUE WITH
                    </div>

                    {/* Social */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">
                            Google
                        </button>
                        <button className="py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">
                            GitHub
                        </button>
                    </div>

                    {/* Footer */}
                    <p className="text-center text-sm text-white/40 mt-6">
                        Don’t have an account?
                        <span className="text-purple-400 cursor-pointer"> Sign up</span>
                    </p>

                </div>

            </div>
            <footer className="fixed bottom-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-6 z-50">

                {/* Left */}
                <div className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/40">
                    © 2026 Chatify. All rights reserved.
                </div>

                {/* Right */}
                <div className="flex gap-6">
                    <a
                        href="#"
                        className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/40 hover:text-white transition-colors"
                    >
                        Privacy Policy
                    </a>

                    <a
                        href="#"
                        className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/40 hover:text-white transition-colors"
                    >
                        Terms of Service
                    </a>
                </div>

            </footer>
        </div>
    );
}
export default LoginPage
