import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera } from "lucide-react"

export function UserProfile() {
  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="relative">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder.svg" alt="Profile picture" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <Button size="icon" variant="secondary" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full">
            <Camera className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex-1">
          <CardTitle className="text-2xl">User Name</CardTitle>
          <p className="text-sm text-gray-400">user@example.com</p>
        </div>
      </CardHeader>
    </Card>
  )
}

