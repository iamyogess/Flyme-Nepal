import { Ellipsis } from "lucide-react";
import Image from "next/image";
import React from "react";

const MessageHeader = () => {
  return (
    <div className="w-full flex justify-between items-center border-b p-2">
      <div className="flex items-center gap-x-2">
        <div className="h-12 w-12">
          <Image
            src="/traveler.jpg"
            alt="User Profile"
            height={200}
            width={200}
            className="h-full w-full object-cover rounded-full"
          />
        </div>
        <h2 className="font-semibold">Yogesh Shrestha</h2>
      </div>
      <div className="h-8 w-8 rounded-full border flex justify-center items-center cursor-pointer">
        <Ellipsis />
      </div>
    </div>
  );
};

export default MessageHeader;
