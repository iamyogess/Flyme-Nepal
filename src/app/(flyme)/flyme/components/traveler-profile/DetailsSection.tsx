import { Calendar, DollarSign, MapPin, Package, PackagePlus, Plane, Weight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const DetailsSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* About Me Section */}
      <div className="md:w-3/5 border border-gray-300 p-6 rounded-lg">
        <h1 className="text-xl font-semibold text-black/90 mb-3">About me</h1>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
          I&apos;m a frequent traveler who loves helping people connect across borders. I have experience carrying items
          safely and securely for others during my travels. I&apos;m reliable, trustworthy, and understand the importance of
          handling your packages with care.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Verified Traveler</Badge>
          <Badge variant="outline">5+ Successful Deliveries</Badge>
          <Badge variant="outline">Excellent Reviews</Badge>
        </div>
      </div>

      {/* Trip Details Section */}
      <div className="md:w-2/5 border border-gray-300 p-6 rounded-lg bg-gray-50/50">
        <h2 className="text-lg font-semibold text-black/90 mb-4 flex items-center gap-2">
          <Plane className="h-5 w-5 text-blue-600" />
          Current Trip
        </h2>

        <div className="space-y-3">
          {/* Route */}
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <MapPin className="h-4 w-4 text-red-500 flex-shrink-0" />
            <span className="font-medium">Kathmandu → Dubai</span>
          </div>

          {/* Departure Date */}
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <Calendar className="h-4 w-4 text-blue-500 flex-shrink-0" />
            <span>Departure: Feb 26, 2025</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700">
            <PackagePlus className="h-4 w-4 text-red-500 flex-shrink-0" />
            <span className="font-medium">Pickup → Tribhuvan International Airport</span>
          </div>

          {/* Available Space & Price */}
          <div className="bg-white p-3 rounded border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Weight className="h-4 w-4 text-green-500" />
                <span>Available Space</span>
              </div>
              <span className="text-sm font-medium text-green-600">4kg remaining</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Package className="h-4 w-4 text-orange-500" />
                <span>Rate per kg</span>
              </div>
              <div className="flex items-center gap-1 text-lg font-bold text-green-600">
                <DollarSign className="h-5 w-5" />
                <span>2</span>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="pt-2">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">✈️ Available for Bookings</Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsSection
