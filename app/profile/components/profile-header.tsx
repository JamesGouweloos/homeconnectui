import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <div className="absolute inset-0 -m-1">
          <Progress value={20} className="w-[calc(100%+8px)] h-[calc(100%+8px)] rounded-full" />
        </div>
        <Avatar className="h-24 w-24 border-4 border-white">
          <AvatarImage src="/placeholder.svg" alt="Profile picture" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
      <div className="text-center space-y-1">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-xl font-semibold">John Doe, 28</h2>
          <span className="bg-primary/10 text-primary text-sm px-2 py-0.5 rounded-full">Tenant</span>
        </div>
        <p className="text-sm text-muted-foreground">20% Complete</p>
      </div>
    </div>
  )
}

