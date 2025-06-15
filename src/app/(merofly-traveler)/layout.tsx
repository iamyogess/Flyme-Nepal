import Footer from "@/components/layout/Footer";
import UserNavbar from "@/components/shared/UserNavbar";
import type React from "react";

export default function TravelerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UserNavbar />
      <main className="min-h-screen bg-gray-50">{children}</main>
      <Footer />
    </>
  );
}
