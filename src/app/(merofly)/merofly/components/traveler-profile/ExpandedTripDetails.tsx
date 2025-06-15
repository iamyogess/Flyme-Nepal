import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, DollarSign, Luggage, MapPin, Plane } from "lucide-react"

export default function ExpandedTripDetails() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <CardTitle className="text-lg font-medium flex items-center">
            <Plane className="h-5 w-5 mr-2 text-blue-600" />
            Current Trip Details
          </CardTitle>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Available for Booking</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Route Information */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500">Route Information</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-500" />
                <span className="text-sm">
                  From: <strong>Kathmandu</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-500" />
                <span className="text-sm">
                  To: <strong>Dubai</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-green-500" />
                <span className="text-sm">
                  Departure: <strong>Feb 26, 2025</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-purple-500" />
                <span className="text-sm">
                  Arrival: <strong>Feb 26, 2025</strong>
                </span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Flight Details */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500">Flight Details</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Plane className="h-4 w-4 text-blue-500" />
                <span className="text-sm">
                  Airline: <strong>Emirates</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-500" />
                <span className="text-sm">
                  Flight: <strong>EK2537</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-500" />
                <span className="text-sm">
                  Terminal: <strong>T3</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-red-500" />
                <span className="text-sm">
                  Layovers: <strong>None</strong>
                </span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Capacity Information */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500">Capacity Information</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Luggage className="h-4 w-4 text-blue-500" />
                <span className="text-sm">
                  Total Allowance: <strong>30kg</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Luggage className="h-4 w-4 text-amber-500" />
                <span className="text-sm">
                  Personal Items: <strong>26kg</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Luggage className="h-4 w-4 text-green-500" />
                <span className="text-sm">
                  Available Space: <strong>4kg</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-green-600" />
                <span className="text-sm">
                  Rate: <strong>$2/kg</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
