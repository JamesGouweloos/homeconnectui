"use client"

import { useEffect, useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  id: string
  content: string
  sender: "user" | "property"
  timestamp: string
}

interface ChatMessagesProps {
  chatId: string
}

export function ChatMessages({ chatId }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const messages: Message[] = [
    {
      id: "1",
      content: "Hi! I'm interested in viewing this apartment.",
      sender: "user",
      timestamp: "10:30 AM",
    },
    {
      id: "2",
      content: "Hello! Of course, I'd be happy to arrange a viewing. When would you like to come see the apartment?",
      sender: "property",
      timestamp: "10:32 AM",
    },
    {
      id: "3",
      content: "Is it possible to view it this weekend?",
      sender: "user",
      timestamp: "10:33 AM",
    },
    {
      id: "4",
      content:
        "Yes, we have several time slots available this weekend. You can schedule a viewing using the button above.",
      sender: "property",
      timestamp: "10:35 AM",
    },
  ]

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex items-start gap-2 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
        >
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={message.sender === "user" ? "/placeholder.svg" : "/placeholder.svg"}
              alt={message.sender}
            />
            <AvatarFallback>{message.sender[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div
            className={`rounded-lg p-3 max-w-[80%] ${
              message.sender === "user" ? "bg-primary text-white" : "bg-gray-900 text-white"
            }`}
          >
            <p>{message.content}</p>
            <span className="text-xs opacity-70 mt-1 block">{message.timestamp}</span>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}

