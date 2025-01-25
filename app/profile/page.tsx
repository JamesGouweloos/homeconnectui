import Link from "next/link"
import { ArrowLeft, RefreshCw, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileHeader } from "./components/profile-header"
import { ProfileSections } from "./components/profile-sections"
import { UserProperties } from "./components/user-properties"

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">Profile</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <RefreshCw className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <ProfileHeader />

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="w-full justify-start h-12 bg-transparent border-b rounded-none p-0 space-x-6">
            <TabsTrigger
              value="profile"
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none h-12"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="preferences"
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none h-12"
            >
              Preferences
            </TabsTrigger>
            <TabsTrigger
              value="properties"
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none h-12"
            >
              Properties
            </TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="pt-6">
            <ProfileSections />
          </TabsContent>
          <TabsContent value="preferences" className="pt-6">
            <ProfileSections showPreferences />
          </TabsContent>
          <TabsContent value="properties" className="pt-6">
            <UserProperties />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

