"use client"

import Link from "next/link"
import { Home, Heart, MessageCircle, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BottomNav() {
  return (
    <nav className="border-t border-gray-800 bg-black p-2">
      <div className="flex items-center justify-around">
        <Link href="/">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-secondary">
            <Home className="h-6 w-6" />
          </Button>
        </Link>
        <Link href="/favorites">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-secondary">
            <Heart className="h-6 w-6" />
          </Button>
        </Link>
        <Link href="/chat">
          <Button variant="ghost" size="icon" className="text-secondary">
            <MessageCircle className="h-6 w-6" />
          </Button>
        </Link>
        <Link href="/profile">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-secondary">
            <User className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </nav>
  )
}

