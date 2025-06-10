import UserNavbar from "@/components/shared/UserNavbar";
import { Button } from "@/components/ui/button";
import WidthWrapper from "@/components/WidthWrapper";
import Image from "next/image";

export default function UserProfile() {
  return (
    <>
      <UserNavbar />
      <WidthWrapper>
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-5 mt-20 mb-10">
          {/* Left Section */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Profile Card */}
            <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
              {/* Cover Image */}
              <div className="w-full h-52 relative">
                <Image
                  src="/handing.jpg"
                  alt="Cover Pic"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Profile Image */}
              <div className="relative -mt-14 ml-4">
                <div className="h-28 w-28 rounded-full border-4 border-white overflow-hidden">
                  <Image
                    src="/traveler.jpg"
                    alt="Profile Pic"
                    height={400}
                    width={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* User Info */}
              <div className="px-4 py-6">
                <h1 className="font-semibold text-lg">Yogesh Shrestha</h1>
                <p className="text-sm text-gray-500">
                  This will be displayed on your profile
                </p>
                <div className="mt-4">
                  <Button>Save</Button>
                </div>
              </div>
            </div>

            {/* Personal Info Form */}
            <div className="border rounded-lg p-6 bg-white shadow-sm space-y-4">
              <h2 className="text-lg font-semibold mb-2">
                Personal Information
              </h2>

              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  defaultValue="Yogesh Shrestha"
                  className="h-10 p-2 border rounded-md w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="yogesh@example.com"
                  className="h-10 p-2 border rounded-md w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  defaultValue="+977 98XXXXXXXX"
                  className="h-10 p-2 border rounded-md w-full"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <h2 className="text-lg font-semibold mb-2">About You</h2>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  defaultValue="+977 98XXXXXXXX"
                  className="h-10 p-2 border rounded-md w-full"
                />
              </div>
            </div>

            {/* Password Section */}
            <div className="border rounded-lg p-6 bg-white shadow-sm space-y-4">
              <h2 className="text-lg font-semibold mb-2">Change Password</h2>

              {/* Current Password */}
              <div className="space-y-2">
                <label
                  htmlFor="currentPassword"
                  className="text-sm font-medium"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  placeholder="Enter current password"
                  className="h-10 p-2 border rounded-md w-full"
                />
              </div>

              {/* New Password */}
              <div className="space-y-2">
                <label htmlFor="newPassword" className="text-sm font-medium">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  placeholder="Enter new password"
                  className="h-10 p-2 border rounded-md w-full"
                />
              </div>

              {/* Confirm New Password */}
              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm new password"
                  className="h-10 p-2 border rounded-md w-full"
                />
              </div>

              <Button className="mt-4 w-full md:w-auto">Save Password</Button>
            </div>
          </div>
        </div>
      </WidthWrapper>
    </>
  );
}
