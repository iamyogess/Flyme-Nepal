import { Menu, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="w-full h-20 sticky top-0 bg-background z-50">
      <div className="w-full h-full container mx-auto px-4 md:px-6 lg:px-0 flex justify-between items-center">
        <div className="flex justify-between md:justify-start items-center gap-x-20">
          <h1 className="text-primary font-bold text-4xl">Flyme</h1>
          <ul className="hidden md:flex items-center gap-x-10">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Home</Link>
            </li>
          </ul>
        </div>

        {/* right  */}
        <div>
          <Button className="hidden md:flex gap-x-1 items-center h-12 cursor-pointer">
            <User /> Already a member?
          </Button>
          <button className="md:hidden flex justify-center items-center border rounded p-1 cursor-pointer hover:bg-gray-100">
            <Menu size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
