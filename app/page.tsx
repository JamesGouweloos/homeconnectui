import PropertyCard from "./components/property-card"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-4">
      <PropertyCard
        images={["/placeholder.svg?height=800&width=400"]}
        price={1500}
        location="Amsterdam"
        features={["Furnished", "City Center", "Balcony"]}
        description="Beautiful 2-bedroom apartment in the heart of Amsterdam. Recently renovated with modern appliances and plenty of natural light."
        size={75}
        bedrooms={2}
        available="Immediate"
      />
    </main>
  )
}

