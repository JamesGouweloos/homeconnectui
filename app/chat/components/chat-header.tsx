"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { ScheduleViewing } from "./schedule-viewing"
import { useState } from "react"

interface ChatHeaderProps {
  chatId: string
}

export function ChatHeader({ chatId }: ChatHeaderProps) {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false)

  return (
    <div className="flex items-center gap-4 border-b border-gray-800 p-4 bg-black">
      <Link href="/chat">
        <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-secondary">
          <ArrowLeft className="h-6 w-6" />
        </Button>
      </Link>
      <Avatar>
        <AvatarImage src="/placeholder.svg" alt="Property" />
        <AvatarFallback>P</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <h2 className="font-semibold text-white">Amsterdam Apartment</h2>
        <p className="text-sm text-gray-400">€1,500/month</p>
      </div>
      <Button
        variant="secondary"
        onClick={() => setIsScheduleOpen(true)}
        className="bg-secondary text-white hover:bg-secondary/90"
      >
        Schedule Viewing
      </Button>
      <ScheduleViewing open={isScheduleOpen} onOpenChange={setIsScheduleOpen} propertyName="Amsterdam Apartment" />
    </div>
  )
}

