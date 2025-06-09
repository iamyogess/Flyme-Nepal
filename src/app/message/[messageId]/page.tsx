"use client"
import React, { useState } from "react";
import UserNavbar from "@/components/shared/UserNavbar";
import MessageHeader from "../components/MessageHeader";
import { Input } from "@/components/ui/input";
import { SendHorizonal } from "lucide-react";

const MessagePage = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    // Add your send logic here (e.g., API call, socket emit, etc.)
    console.log("Sending message:", message);
    setMessage("");
  };

  return (
    <>
      <UserNavbar />
      <div className="w-full">
        <div className="mt-20 w-full max-w-xl min-h-[80vh] flex flex-col justify-between mx-auto p-4 border rounded">
          <MessageHeader />
          <div className="flex items-center gap-x-2">
            <Input
              type="text"
              placeholder="Type message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-full"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <button
              onClick={handleSend}
              className="flex justify-center items-center bg-primary rounded-full h-8 w-10"
            >
              <SendHorizonal className="text-white h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePage;
