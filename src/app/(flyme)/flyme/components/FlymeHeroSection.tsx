"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Package } from "lucide-react"
import Image from "next/image"
import type React from "react"
import { useState } from "react"

const FlymeHeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", searchQuery)
  }

  return (
    <main className="relative h-[110vh]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/user-hero.jpg"
          alt="Delivery service background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 w-full h-full max-w-7xl px-4 md:px-0 mx-auto flex flex-col justify-center gap-y-10 items-start">
        <div className="space-y-4">
          <h1 className="text-white/90 font-bold mt-20 md:mt-0 text-5xl md:text-8xl flex flex-col justify-center leading-tight">
            <span>Find</span>
            <span>your parcel</span>
            <span className="text-primary">buddy!</span>
          </h1>
          <p className="text-white/80 text-sm md:text-xl max-w-2xl">
            Connect with trusted travelers and send your packages safely across the globe. Fast, secure, and affordable
            delivery solutions.
          </p>
        </div>

        <div className=" bottom-10 left-4 right-4 md:left-0 md:right-0 w-auto md:w-full">
          <div className="bg-black/10 backdrop-blur-3xl rounded-2xl p-6 shadow-2xl">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Destination Search */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-100 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Destination
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="Where to send?"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 h-12 rounded-lg border-2 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Package Type */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-100 flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Package Type
                  </label>
                  <select className="w-full h-12 px-3 rounded-lg border-2 focus:border-primary transition-colors bg-white">
                    <option>Documents</option>
                    <option>Small Package</option>
                    <option>Medium Package</option>
                    <option>Large Package</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-transparent">Search</label>
                  <Button type="submit" className="w-full h-12 text-lg font-semibold">
                    Find Buddies
                  </Button>
                </div>
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-6 border-gray-200">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">10K+</div>
                  <div className="text-xs text-gray-200">Active Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">50+</div>
                  <div className="text-xs text-gray-200">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">99%</div>
                  <div className="text-xs text-gray-200">Success Rate</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default FlymeHeroSection
