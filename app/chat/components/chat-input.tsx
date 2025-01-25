"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Smile, ImageIcon, Send } from "lucide-react"

export function ChatInput() {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-800 p-4 bg-black">
      <div className="flex items-end gap-2">
        <div className="flex-1 relative">
          <Textarea
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[44px] max-h-[200px] resize-none bg-gray-900 border-gray-800 text-white"
            rows={1}
          />
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="absolute bottom-1 left-2 text-gray-400 hover:text-white"
          >
            <Smile className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="absolute bottom-1 left-10 text-gray-400 hover:text-white"
          >
            <ImageIcon className="h-5 w-5" />
          </Button>
        </div>
        <Button type="submit" size="icon" className="rounded-full h-[44px] w-[44px]">
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </form>
  )
}

