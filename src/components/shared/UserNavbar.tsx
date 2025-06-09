"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, MessageCircleMore } from "lucide-react";
import { usePathname } from "next/navigation";
import Messages from "./Messages";

const UserNavbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpenMessageModal, setIsOpenMessageModal] = useState(false);
  // const [isOpenNotificationModal, setIsOpenNotificationModal] = useState(false);

  const pathname = usePathname();
  const transparentNavRoutes = ["/flyme", "/flyme-traveler"];
  const isTransparent = transparentNavRoutes.includes(pathname);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMessageModal = () => {
    setIsOpenMessageModal(true);
  };
  const closeMessageModal = () => {
    setIsOpenMessageModal(false);
  };

  // const openNotificationModal = () => {
  //   setIsOpenNotificationModal(true);
  // };
  // const closeNotificationModal = () => {
  //   setIsOpenNotificationModal(false); // Fixed: was setting message modal instead of notification modal
  // };

  return (
    <>
      <nav
        className={`
        fixed top-0 w-full h-18 z-50 transition-all duration-300 ease-in-out
        ${
          isScrolled || !isTransparent
            ? "bg-background shadow-sm"
            : "bg-transparent"
        }
      `}
      >
        <div className="h-full w-full max-w-7xl flex justify-between items-center px-4 md:px-0 mx-auto">
          <Link
            href="/flyme"
            className="font-extrabold text-3xl md:text-4xl text-primary hover:text-primary/80 transition-colors"
          >
            Flyme
          </Link>

          <div className="flex items-center gap-x-2 md:gap-x-3">
            <button
              onClick={() => openMessageModal()}
              className={`relative h-9 w-9 md:h-10 md:w-10 p-2 flex justify-center items-center ${
                isScrolled || !isTransparent
                  ? "border border-gray-600 hover:bg-gray-400/20"
                  : "bg-gray-400/20 hover:bg-gray-500/20"
              } rounded-full transition-colors ease-in-out  duration-200 cursor-pointer`}
            >
              <MessageCircleMore
                className={`h-5 w-5 md:h-6 md:w-6  ${
                  isScrolled || !isTransparent ? "text-black" : "text-white"
                }`}
              />
              <span className="absolute top-0 right-0 text-xs rounded-full bg-red-500 p-1 h-4 w-4 flex justify-center items-center text-white">
                2
              </span>
            </button>
            <button
              className={`relative h-9 w-9 md:h-10 md:w-10 p-2 flex justify-center items-center ${
                isScrolled || !isTransparent
                  ? "border border-gray-600 hover:bg-gray-400/20"
                  : "bg-gray-400/20 hover:bg-gray-500/20"
              } rounded-full transition-colors ease-in-out  duration-200 cursor-pointer`}
            >
              <Bell
                className={`h-5 w-5 md:h-6 md:w-6  ${
                  isScrolled || !isTransparent ? "text-black" : "text-white"
                }`}
              />
              <span className="absolute top-0 right-0 text-xs rounded-full bg-red-500 p-1 h-4 w-4 flex justify-center items-center text-white">
                2
              </span>
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-x-2 h-auto p-2 hover:bg-gray-400/50 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User avatar"
                    />
                    <AvatarFallback className="text-xs">YG</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Team
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Subscription
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-destructive">
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Fixed: Pass the state and functions correctly */}
      <Messages
        isOpen={isOpenMessageModal}
        openMessageModal={openMessageModal}
        closeMessageModal={closeMessageModal}
      />
    </>
  );
};

export default UserNavbar;
