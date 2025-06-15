"use client"

import { useState } from "react";

const PopularDestinations = () => {
  const mentorsData = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      company: "Google",
      testimonial:
        "The program helped me transition from marketing to tech. I doubled my salary within 6 months.",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Data Scientist",
      company: "Amazon",
      testimonial:
        "The hands-on projects and mentor guidance were invaluable for my career growth.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "UX Designer",
      company: "Apple",
      testimonial:
        "The program's curriculum was exactly what I needed to break into the tech industry.",
      image:
        "https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "UX Designer",
      company: "Apple",
      testimonial:
        "The program's curriculum was exactly what I needed to break into the tech industry.",
      image:
        "https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <section className="w-full py-10 bg-background">
      <div className="w-full mx-auto max-w-7xl px-6">
        {/* heading  */}
        <div className="flex flex-col space-y-4 max-w-fit relative mb-5 lg:mb-10">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Popular Destinations
          </h1>
          <p className="py-1 px-4 text-xs rounded-full border-secondary border w-fit">
            Learn, practice and grow with our industry experts
          </p>
          <span className="absolute h-20 w-20 bg-secondary/20 -left-5  -top-2 rounded-full"></span>
        </div>
        {/* mentors  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentorsData.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface MentorTypes {
  id: number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
}

const MentorCard = ({ mentor }: { mentor: MentorTypes }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        src={mentor.image}
        alt={mentor.name}
        className="h-90 w-full object-cover rounded-lg transition-all duration-300"
      />

      {/* Overlay that appears on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/40 to-black/20 flex flex-col justify-end p-6 transition-all duration-300 ${
          isHovering ? "bg-gradient-to-t from-black/80 to-black/40" : ""
        }`}
      >
        <h3 className="text-white text-xl font-bold">{mentor.name}</h3>
        <p className="text-white/90 text-sm">
          {mentor.role} at {mentor.company}
        </p>
        <p className="text-white/80 text-sm mt-2">{mentor.testimonial}</p>
      </div>
    </div>
  );
};

export default PopularDestinations;
