import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CoverImage from "../../components/traveler-profile/CoverImage";
import ProfileImage from "../../components/traveler-profile/ProfileImage";
import DetailsSection from "../../components/traveler-profile/DetailsSection";
import ExpandedTripDetails from "../../components/traveler-profile/ExpandedTripDetails";
import VerificationStatus from "../../components/traveler-profile/VerificationStatus";
import ServicePolicies from "../../components/traveler-profile/ServicePolicy";


export default function TravelerProfileComplete() {
  return (
    <div className="w-full mt-18 min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto">
        <CoverImage />
        <div className="bg-white">
          <ProfileImage />
        </div>

        <div className="py-8 px-4 md:px-6 lg:px-0">
          <Tabs defaultValue="profile" className="w-full mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="trips">Trip Details</TabsTrigger>
              <TabsTrigger value="policies">Policies</TabsTrigger>
              {/* <TabsTrigger value="book">Book Delivery</TabsTrigger> */}
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <DetailsSection />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <VerificationStatus />
              </div>
            </TabsContent>

            <TabsContent value="trips">
              <ExpandedTripDetails />
            </TabsContent>

            <TabsContent value="policies">
              <ServicePolicies />
            </TabsContent>
{/* 
            <TabsContent value="book">
              <BookingForm />
            </TabsContent> */}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
