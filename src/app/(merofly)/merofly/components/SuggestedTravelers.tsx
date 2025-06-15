import TravelerCard from "./TravelerCard"

const SuggestedTravelers = () => {
  const travelers = [
    {
      id: "1",
      name: "Yogesh Shrestha",
      image: "/traveler.jpg",
      from: "Kathmandu",
      to: "Sydney",
      rating: 4.8,
      reviewCount: 127,
      departureDate: "Dec 25, 2024",
      capacity: "5kg available",
      pricePerKg: 12,
      verified: true,
      responseTime: "Usually responds in 2 hours",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      image: "/traveler.jpg",
      from: "New York",
      to: "London",
      rating: 4.9,
      reviewCount: 89,
      departureDate: "Dec 28, 2024",
      capacity: "3kg available",
      pricePerKg: 15,
      verified: true,
      responseTime: "Usually responds in 1 hour",
    },
    {
      id: "3",
      name: "Ahmed Hassan",
      image: "/traveler.jpg",
      from: "Dubai",
      to: "Mumbai",
      rating: 4.7,
      reviewCount: 156,
      departureDate: "Dec 30, 2024",
      capacity: "8kg available",
      pricePerKg: 8,
      verified: true,
      responseTime: "Usually responds in 3 hours",
    },
    {
      id: "4",
      name: "Maria Garcia",
      image: "/traveler.jpg",
      from: "Madrid",
      to: "Mexico City",
      rating: 4.6,
      reviewCount: 203,
      departureDate: "Jan 2, 2025",
      capacity: "4kg available",
      pricePerKg: 18,
      verified: false,
      responseTime: "Usually responds in 4 hours",
    },
  ]

  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 md:px-0 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Available Travel Buddies</h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Connect with verified travelers heading to your destination. Send your packages safely and affordably.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {travelers.map((traveler) => (
          <TravelerCard key={traveler.id} {...traveler} />
        ))}
      </div>
    </section>
  )
}

export default SuggestedTravelers
