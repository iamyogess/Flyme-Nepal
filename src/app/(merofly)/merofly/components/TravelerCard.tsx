import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Package, DollarSign } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface TravelerCardProps {
  id?: string;
  name?: string;
  image?: string;
  from?: string;
  to?: string;
  rating?: number;
  reviewCount?: number;
  departureDate?: string;
  capacity?: string;
  pricePerKg?: number;
  verified?: boolean;
  responseTime?: string;
}

const TravelerCard = ({
  name,
  image,
  from,
  to,
  departureDate,
  capacity,
  pricePerKg,
  verified,
  responseTime,
}: TravelerCardProps) => {
  if (!name) return <div>no travelers</div>;

  return (
    <div className="rounded-3xl border">
      <div className="h-64 w-auto relative">
        <Image
          src={image || "/traveler.jpg"}
          alt="Traveler"
          height={400}
          width={300}
          className="rounded-t-3xl h-full w-full object-cover"
        />
        <Badge className="absolute top-4 right-4 rounded-full font-medium text-sm">
          {verified ? "Verified" : ""}
        </Badge>
      </div>

      <div className="flex flex-col px-2 py-4 space-y-3">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-900">{name}</h2>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span className="font-medium">
              {from} → {to}
            </span>
          </div>
        </div>

        {/* Trip Details */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4" />
              <span>Departure: {departureDate}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Package className="h-4 w-4" />
              <span>{capacity}</span>
            </div>
            <div className="flex items-center gap-1 text-sm font-semibold text-primary">
              <DollarSign className="h-4 w-4" />
              <span>{pricePerKg}/kg</span>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="text-xs text-gray-500 bg-gray-50 rounded-lg p-2">
          {responseTime}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Link href="/merofly/traveler-profile/hi">
            <Button variant="outline" className="w-full">
              View Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TravelerCard;
