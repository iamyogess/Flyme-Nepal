import UserNavbar from "@/components/shared/UserNavbar";
import React from "react";
import MessageHeader from "../components/MessageHeader";
import { Input } from "@/components/ui/input";
import { SendHorizonal } from "lucide-react";

const MessagePage = () => {
  return (
    <>
      <UserNavbar />
      <div className="w-full ">
        <div className="mt-20 w-full max-w-xl  min-h-[80vh] flex flex-col justify-between mx-auto p-4 border rounded">
          <MessageHeader />
          <div className="flex items-center  gap-x-2">
            <Input
              type="text"
              placeholder="Type message"
              className="rounded-full"
            />
            <div className="flex justify-center items-center bg-primary rounded-full h-8 w-10">
              <SendHorizonal className="text-white h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePage;
