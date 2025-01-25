import { ChatList } from "./components/chat-list"
import { BottomNav } from "./components/bottom-nav"

export default function ChatPage() {
  return (
    <main className="flex flex-col h-screen bg-black">
      <div className="flex-1 overflow-hidden">
        <div className="px-4 py-6">
          <h1 className="text-xl font-semibold text-white mb-6">Messages</h1>
          <ChatList />
        </div>
      </div>
      <BottomNav />
    </main>
  )
}

