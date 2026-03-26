import React from 'react'

const ChatPage = () => {
    return (
        <div>
            <button className="btn btn-primary mb-6">hey this is for test Purposes Only !!!</button>
            <div
                className="bg-[#15151d]/80 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-3 flex items-center gap-2">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="bg-transparent outline-none text-white placeholder-gray-400 flex-1"
                />

            </div>
        </div>
    )
}
export default ChatPage
