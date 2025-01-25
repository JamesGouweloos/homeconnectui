"use client"

import { useState } from "react"
import { Plus, Home, Euro, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AddPropertySheet } from "./add-property-sheet"
import Image from "next/image"

export function UserProperties() {
  const [isAddPropertyOpen, setIsAddPropertyOpen] = useState(false)

  const properties = [
    {
      id: 1,
      title: "Modern Studio in City Center",
      price: 1200,
      location: "Amsterdam",
      available: "Immediate",
      image: "/placeholder.svg?height=200&width=300",
      status: "Active",
    },
    {
      id: 2,
      title: "Spacious 2-Bedroom Apartment",
      price: 1800,
      location: "Rotterdam",
      available: "From March",
      image: "/placeholder.svg?height=200&width=300",
      status: "Under Review",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">My Properties</h2>
        <Button onClick={() => setIsAddPropertyOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Property
        </Button>
      </div>

      <div className="grid gap-4">
        {properties.map((property) => (
          <Card key={property.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex">
                <div className="relative w-[120px] h-[120px]">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h3 className="font-medium">{property.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        {property.location}
                      </div>
                    </div>
                    <Badge variant={property.status === "Active" ? "default" : "secondary"}>{property.status}</Badge>
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-sm">
                    <div className="flex items-center">
                      <Euro className="mr-1 h-4 w-4" />
                      {property.price}/month
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {property.available}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AddPropertySheet open={isAddPropertyOpen} onOpenChange={setIsAddPropertyOpen} />
    </div>
  )
}

