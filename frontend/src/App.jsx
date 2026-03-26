import React from 'react'
import {Route, Routes} from "react-router";
import LoginPage from "./pages/LoginPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";

const App = () => {
    return (
        <div className="min-h-screen bg-slate-900 relative flex justify-center items-center p-4 overflow-hidden">
            <div
                className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="min-h-screen bg-[#0f0f14] relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#12121c] to-[#0a0a0f] opacity-90"></div>
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(120,119,198,0.15),_transparent_40%)]"></div>
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(80,200,255,0.08),_transparent_40%)]"></div>
                <div className="relative z-10">
                </div>
            </div>
            <Routes>
                <Route path="/" element={<ChatPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
            </Routes>
        </div>
    )
}
export default App
