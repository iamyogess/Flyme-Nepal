import { MessageCircleIcon, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Input } from "../ui/input";

interface MessageModalProps {
  isOpen: boolean;
  openMessageModal: () => void;
  closeMessageModal: () => void;
}

const Messages: React.FC<MessageModalProps> = ({
  isOpen,
  closeMessageModal,
}) => {
  if (!isOpen) return null;

  const messages = [
    {
      id: 1,
      name: "Yogesh Shrestha",
      message: "Hello! How are you?....",
      time: "3m",
      image: "/traveler.jpg",
    },
    {
      id: 2,
      name: "Yogesh Shrestha",
      message: "Are you free tomorrow?",
      time: "10m",
      image: "/traveler.jpg",
    },
    {
      id: 3,
      name: "Yogesh Shrestha",
      message: "Let's catch up soon!",
      time: "1h",
      image: "/traveler.jpg",
    },
  ];

  return (
    <div className="fixed right-2 lg:right-50 top-16 z-50 h-[500px] w-80 rounded-xl border border-gray-200 shadow-xl bg-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <MessageCircleIcon className="h-7 w-7 text-primary" />
          <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
        </div>
        <button
          onClick={closeMessageModal}
          className="h-8 w-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
          aria-label="Close messages modal"
        >
          <X className="h-4 w-4 text-gray-500" />
        </button>
      </div>

      {/* Search */}
      <div className="p-4">
        <Input 
          type="text" 
          placeholder="Search messages..." 
          className="h-9 text-sm border-gray-200 " 
        />
      </div>

      {/* Message List */}
      <div className="px-2 pb-4 overflow-y-auto max-h-[calc(500px-120px)]">
        {messages.map(({ id, name, message, time, image }) => (
          <Link key={id} href="/message/messageid1">
          <div
            
            className="flex items-center gap-3 py-3 px-1 mx-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-50 my-0.5"
          >
            <div className="flex-shrink-0">
              <Image
                src={image}
                alt={`${name}'s avatar`}
                height={40}
                width={40}
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-sm text-gray-900 truncate">{name}</h3>
                <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{time}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">{message}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Messages;