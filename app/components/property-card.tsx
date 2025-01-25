"use client"

import { useState } from "react"
import { Heart, User, MessageCircle, Home, MapPin, Euro, Calendar, Maximize, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface PropertyCardProps {
  images: string[]
  price: number
  location: string
  features: string[]
  description: string
  size: number
  bedrooms: number
  available: string
}

export default function PropertyCard({
  images,
  price,
  location,
  features,
  description,
  size,
  bedrooms,
  available,
}: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <Card className="relative h-[800px] w-full max-w-md overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src={images[currentImageIndex] || "/placeholder.svg"}
          alt={`Property in ${location}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/0 to-black/80" />
      </div>

      <CardContent className="relative h-full p-0">
        {/* Top Actions */}
        <div className="flex items-start justify-between p-4">
          <Link href="/profile">
            <Button variant="ghost" size="icon" className="rounded-full bg-black/50 text-white hover:text-secondary">
              <User className="h-6 w-6" />
            </Button>
          </Link>
          <Link href="/chat">
            <Button variant="ghost" size="icon" className="rounded-full bg-black/50 text-white hover:text-secondary">
              <MessageCircle className="h-6 w-6" />
            </Button>
          </Link>
        </div>

        {/* Property Info */}
        <div className="absolute bottom-0 w-full space-y-4 p-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">€{price}/month</h2>
              <Badge variant="secondary" className="font-normal">
                {available}
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <MapPin className="h-4 w-4" />
              {location}
            </div>
          </div>

          <div className="flex gap-2">
            {features.map((feature) => (
              <Badge key={feature} variant="outline" className="border-white/20">
                {feature}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              {bedrooms} BR
            </div>
            <div className="flex items-center gap-2">
              <Maximize className="h-4 w-4" />
              {size}m²
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {available}
            </div>
          </div>

          <p className="text-sm text-gray-300">{description}</p>

          {/* Bottom Actions */}
          <div className="flex justify-center gap-4 pt-4">
            <Button variant="ghost" size="icon" className="h-14 w-14 rounded-full bg-white/10 hover:bg-white/20">
              <X className="h-8 w-8" />
            </Button>
            <Button variant="ghost" size="icon" className="h-14 w-14 rounded-full bg-white/10 hover:bg-white/20">
              <Heart className="h-8 w-8 text-secondary" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

