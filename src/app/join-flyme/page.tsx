"use client"
import WidthWrapper from "@/components/WidthWrapper"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, MapPin, Phone, User, Car, Bike, Truck, DollarSign, Shield, Calendar } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

const JoinFlyme = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    vehicleType: "",
    licenseNumber: "",
    experience: "",
    availability: "",
    emergencyContact: "",
    agreeToTerms: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const requirements = [
    { icon: <User className="h-5 w-5" />, text: "Must be 18+ years old with valid ID" },
    { icon: <Car className="h-5 w-5" />, text: "Own vehicle (bike, car, or van)" },
    { icon: <Shield className="h-5 w-5" />, text: "Clean driving record" },
    { icon: <Phone className="h-5 w-5" />, text: "Smartphone with internet access" },
    { icon: <Clock className="h-5 w-5" />, text: "Flexible schedule availability" },
    { icon: <MapPin className="h-5 w-5" />, text: "Knowledge of local area" },
  ]

  const benefits = [
    { title: "Flexible Hours", description: "Work when you want, as much as you want" },
    { title: "Competitive Pay", description: "Earn up to NPR 50,000+ per month" },
    { title: "Fuel Allowance", description: "Get reimbursed for delivery expenses" },
    { title: "Insurance Coverage", description: "Comprehensive coverage while on duty" },
    { title: "Performance Bonuses", description: "Extra rewards for excellent service" },
    { title: "Training Provided", description: "Complete onboarding and ongoing support" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <WidthWrapper>
        {/* Header */}
        <motion.div
          className="relative h-48 md:h-64 flex justify-center items-center font-bold  overflow-hidden mb-12 rounded-b"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: "url(/handing.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/50 to-primary/70"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Join the Flyme Team</h1>
            <p className="text-lg md:text-xl opacity-90">Become a delivery partner and start earning today</p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-16">
          {/* Left Column - Instructions and Requirements */}
          <div className="lg:col-span-2 space-y-8">
            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-primary" />
                    Why Join Flyme?
                  </CardTitle>
                  <CardDescription>Discover the benefits of being a Flyme delivery partner</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded bg-muted/50">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Requirements Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    Requirements
                  </CardTitle>
                  <CardDescription>Make sure you meet these basic requirements before applying</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {requirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="text-primary">{req.icon}</div>
                        <span>{req.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Process Steps */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-primary" />
                    Application Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      "Submit your application form",
                      "Document verification (1-2 days)",
                      "Background check and interview",
                      "Complete training program",
                      "Start earning with Flyme!",
                    ].map((step, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Badge variant="outline" className="w-8 h-8 rounded-full p-0 flex items-center justify-center">
                          {index + 1}
                        </Badge>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Application Form */}
          <motion.div
            className="lg:sticky lg:top-22 h-fit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Apply Now</CardTitle>
                <CardDescription>Fill out the form below to start your journey with Flyme</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+977 98XXXXXXXX"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="Your complete address"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicleType">Vehicle Type *</Label>
                    <Select onValueChange={(value) => handleInputChange("vehicleType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your vehicle" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bike">
                          <div className="flex items-center gap-2">
                            <Bike className="h-4 w-4" />
                            Motorcycle/Scooter
                          </div>
                        </SelectItem>
                        <SelectItem value="car">
                          <div className="flex items-center gap-2">
                            <Car className="h-4 w-4" />
                            Car
                          </div>
                        </SelectItem>
                        <SelectItem value="van">
                          <div className="flex items-center gap-2">
                            <Truck className="h-4 w-4" />
                            Van/Truck
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="licenseNumber">License Number *</Label>
                    <Input
                      id="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
                      placeholder="Your driving license number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Delivery Experience</Label>
                    <Select onValueChange={(value) => handleInputChange("experience", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No experience</SelectItem>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5+">5+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability *</Label>
                    <Select onValueChange={(value) => handleInputChange("availability", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="When can you work?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time (8+ hours/day)</SelectItem>
                        <SelectItem value="part-time">Part-time (4-8 hours/day)</SelectItem>
                        <SelectItem value="weekends">Weekends only</SelectItem>
                        <SelectItem value="flexible">Flexible schedule</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">Emergency Contact</Label>
                    <Input
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                      placeholder="Emergency contact number"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-[8px] md:text-[11px]">
                      I agree to the{" "}
                      <a href="#" className="text-primary hover:underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" disabled={!formData.agreeToTerms}>
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </WidthWrapper>
    </div>
  )
}

export default JoinFlyme
