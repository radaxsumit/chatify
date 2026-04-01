import React from 'react'

const SignUpPage = () => {
    return (
        <div className="min-h-screen text-white flex items-center justify-center relative overflow-hidden">
            <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-6">

                {/* Logo */}
                <div
                    className="text-2xl font-black tracking-tight bg-gradient-to-r from-[#460df2] to-[#7c4dff] bg-clip-text text-transparent">Chatify
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

            <main className="relative z-10 flex min-h-screen items-center justify-center p-6 md:p-12">

                <div className="w-full max-w-lg">

                    {/* Logo */}
                    <div className="flex flex-col items-center mb-10">
                        <div className="mb-4 p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur">
                            <span className="text-purple-400 text-4xl">⚡</span>
                        </div>

                        <h1 className="text-3xl font-extrabold tracking-tight uppercase bg-gradient-to-r from-[#460df2] to-[#7c4dff] bg-clip-text text-transparent">
                            Chatify
                        </h1>

                        <p className="text-white/50 text-sm mt-2 uppercase tracking-widest">
                            Best Chating App For ZenG
                        </p>
                    </div>

                    {/* CARD */}
                    <div
                        className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl">

                        {/* Heading */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold">Create Account</h2>
                            <p className="text-white/50 text-sm">Fill in your details to start chatting.</p>
                        </div>

                        {/* FORM */}
                        <form className="space-y-5">

                            {/* Name */}
                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-white/50">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Rada"
                                    className="w-full mt-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50"/>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-white/50">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="name@email.com"
                                    className="w-full mt-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50"/>
                            </div>

                            {/* Passwords */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                <div>
                                    <label className="text-[10px] uppercase tracking-widest text-white/50">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full mt-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50"/>
                                </div>

                                <div>
                                    <label className="text-[10px] uppercase tracking-widest text-white/50">
                                        Confirm
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full mt-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50"/>
                                </div>

                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full py-4 rounded-full font-bold bg-gradient-to-r from-[#460df2] to-[#7c4dff] hover:scale-[1.02] active:scale-95 transition-all shadow-lg uppercase text-sm tracking-wide">
                                Create Account
                            </button>

                        </form>

                        {/* Divider */}
                        <div className="flex items-center my-8">
                            <div className="flex-grow h-[1px] bg-white/10"></div>
                            <span
                                className="px-4 text-[10px] uppercase tracking-widest text-white/30">Or join with</span>
                            <div className="flex-grow h-[1px] bg-white/10"></div>
                        </div>

                        {/* Social */}
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-xl transition-all">
                                Google
                            </button>

                            <button
                                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-xl transition-all">
                                GitHub
                            </button>
                        </div>

                    </div>

                    {/* Footer Link */}
                    <div className="mt-8 text-center">
                        <p className="text-white/50 text-sm">
                            Already have an account?
                            <span className="text-purple-400 ml-1 cursor-pointer underline">Log In</span>
                        </p>
                    </div>

                </div>

            </main>

        </div>

    );
}
export default SignUpPage
