import { ChatHeader } from "../components/chat-header"
import { ChatMessages } from "../components/chat-messages"
import { ChatInput } from "../components/chat-input"

export default function ChatRoom({ params }: { params: { id: string } }) {
  return (
    <main className="flex flex-col h-screen bg-black">
      <ChatHeader chatId={params.id} />
      <ChatMessages chatId={params.id} />
      <ChatInput />
    </main>
  )
}

