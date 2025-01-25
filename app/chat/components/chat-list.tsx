"use client"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const matches = [
  {
    id: "1",
    name: "Amsterdam Apartment",
    image: "/placeholder.svg",
    lastMessage: "When would you like to schedule a viewing?",
    time: "33 min",
    unread: true,
  },
  {
    id: "2",
    name: "Rotterdam Studio",
    image: "/placeholder.svg",
    lastMessage: "The apartment is available from next month",
    time: "2 hr",
    unread: false,
  },
  // Add more matches as needed
]

export function ChatList() {
  const [search, setSearch] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {matches.map((match) => (
          <Link key={match.id} href={`/chat/${match.id}`} className="flex-shrink-0">
            <div className="flex flex-col items-center gap-1">
              <Avatar className="h-16 w-16 border-2 border-primary">
                <AvatarImage src={match.image} alt={match.name} />
                <AvatarFallback>{match.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-xs text-white">{match.name.split(" ")[0]}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search messages"
          className="pl-9 bg-gray-900 border-gray-800 text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {matches.map((match) => (
          <Link key={match.id} href={`/chat/${match.id}`}>
            <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-900">
              <Avatar>
                <AvatarImage src={match.image} alt={match.name} />
                <AvatarFallback>{match.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">{match.name}</h3>
                  <span className="text-xs text-gray-400">{match.time}</span>
                </div>
                <p className="text-sm text-gray-400 truncate">{match.lastMessage}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

