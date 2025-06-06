import { Button } from "@/components/ui/button";
import { MessageCircleIcon, User, Package } from "lucide-react";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="w-full px-4 sm:px-5">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Profile Image - Centered on mobile */}
        <div className="flex justify-start -mt-16 mb-4">
          <div className="h-32 w-32 sm:h-40 sm:w-40 relative z-40">
            <Image
              src="/traveler.jpg"
              alt="Profile Picture"
              fill
              className="rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>

        {/* Content - Centered on mobile */}
        <div className="text-start space-y-4">
          <div>
            <h1 className="font-semibold text-2xl sm:text-3xl mb-2 ml-2">
              Yogesh Shrestha
            </h1>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-2">
              Trusted traveler helping people send packages worldwide. Safe,
              reliable, and affordable delivery service.
            </p>
          </div>

          {/* Buttons - Stacked on mobile */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
            <Button
              variant="outline"
              className="flex gap-x-2 items-center justify-center"
            >
              <User size={16} />
              View Profile
            </Button>
            <Button className="flex gap-x-2 items-center justify-center">
              <Package size={16} />
              Book Delivery
            </Button>
            <Button className="flex gap-x-2 items-center justify-center">
              <MessageCircleIcon size={16} />
              Message
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="relative w-full">
          {/* Profile Image - Left positioned on desktop */}
          <div className="absolute h-44 w-44 -mt-16 z-40 left-0">
            <Image
              src="/traveler.jpg"
              alt="Profile Picture"
              fill
              className="rounded-full object-cover border-4 border-white"
            />
          </div>

          {/* Content - Right of profile image on desktop */}
          <div className="pt-6 pl-52 pr-4">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
              <div className="flex-1">
                <h1 className="font-semibold text-2xl lg:text-3xl mb-3">
                  Yogesh Shrestha
                </h1>
                <p className="text-gray-600 leading-relaxed max-w-2xl">
                  Trusted traveler helping people send packages worldwide. Safe,
                  reliable, and affordable delivery service across international
                  destinations.
                </p>
              </div>

              {/* Buttons - Side by side on desktop */}
              <div className="flex gap-3 lg:flex-shrink-0">
                <Button variant="outline" className="flex gap-x-2 items-center">
                  <User size={18} />
                  View Profile
                </Button>
                <Button className="flex gap-x-2 items-center">
                  <Package size={18} />
                  Book Delivery
                </Button>
                <Button className="flex gap-x-2 items-center">
                  <MessageCircleIcon size={18} />
                  Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
