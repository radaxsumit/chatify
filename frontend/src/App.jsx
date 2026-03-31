import React from 'react'
import {Route, Routes} from "react-router";
import LoginPage from "./pages/LoginPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";

const App = () => {
    return (
        <div className="min-h-screen bg-slate-900 relative flex justify-center items-center p-4 overflow-hidden">
            <div className="fixed inset-0 z-0">


                <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay
      bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJ3LNXm_WS4dgTfbw5fqgv82ujGBHmA2p4Kti6hbY6uh0PZjq6GqxLxv_Lnsh3rCDemjtnJb7mmQufVqIxCx_Gl6Tm8OPTDs41Zz7kLgKa_YSVlVhE9n2mcIzQvr3TEfToX7qUzhvfih3Vq7QTa8lwJK7SS8SD_qUCsNzfg5Efv8WWHvMrHKIAaP19pP0-3x-a_otFkQMLM1rDot5PONXTnTOMD1IBgfTwIb8VoU02aLX4rvh7ifanVfjD1wA7lgU72FT1P1ZZEoc')]
      bg-[length:400px] bg-repeat">
                </div>


                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%]
      bg-purple-600/20 blur-[120px] rounded-full">
                </div>


                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%]
      bg-violet-500/20 blur-[120px] rounded-full">
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
