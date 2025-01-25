"use client"

import { Button } from "@/components/ui/button"
import {
  Home,
  Building2,
  Euro,
  Calendar,
  Users,
  FileText,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Phone,
} from "lucide-react"

interface ProfileSectionProps {
  showPreferences?: boolean
}

export function ProfileSections({ showPreferences = false }: ProfileSectionProps) {
  const sections = showPreferences
    ? [
        {
          title: "Preferred Locations",
          icon: Home,
          value: "Amsterdam, Rotterdam",
          progress: "2/3",
        },
        {
          title: "Property Type",
          icon: Building2,
          value: "Apartment, Studio",
          progress: "1/2",
        },
        {
          title: "Budget Range",
          icon: Euro,
          value: "€800 - €1,500",
          progress: "Complete",
        },
        {
          title: "Move-in Date",
          icon: Calendar,
          value: "Flexible",
          progress: "Set",
        },
        {
          title: "Roommates",
          icon: Users,
          value: "Looking for roommates",
          progress: "1/1",
        },
      ]
    : [
        {
          title: "Documents",
          icon: FileText,
          value: "Income statement, ID",
          progress: "2/4",
        },
        {
          title: "Employment",
          icon: Briefcase,
          value: "Software Engineer at Tech Co",
          progress: "Complete",
        },
        {
          title: "Education",
          icon: GraduationCap,
          value: "University of Amsterdam",
          progress: "Complete",
        },
        {
          title: "Contact",
          icon: Phone,
          value: "Phone, Email verified",
          progress: "2/2",
        },
      ]

  return (
    <div className="space-y-4">
      {sections.map((section) => (
        <div key={section.title} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-full">
              <section.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">{section.title}</h3>
              <p className="text-sm text-muted-foreground">{section.value}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{section.progress}</span>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

