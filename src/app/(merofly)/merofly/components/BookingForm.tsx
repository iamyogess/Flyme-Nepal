import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { DollarSign, Package, Weight } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export default function BookingForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center">
          <Package className="h-5 w-5 mr-2 text-blue-600" />
          Book Package Delivery
        </CardTitle>
        <CardDescription>Request Yogesh to carry your package from Kathmandu to Dubai</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="item-description">Item Description</Label>
              <Textarea id="item-description" placeholder="Describe your item(s) in detail" className="resize-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <div className="flex items-center gap-2">
                  <Weight className="h-4 w-4 text-gray-500" />
                  <Input id="weight" type="number" min="0.1" max="4" step="0.1" placeholder="0.5" />
                </div>
                <p className="text-xs text-gray-500">Maximum available: 4kg</p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="category">Item Category</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="documents">Documents</SelectItem>
                    <SelectItem value="cosmetics">Cosmetics</SelectItem>
                    <SelectItem value="gifts">Gifts</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-2">
              <Label>Estimated Value</Label>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-gray-500" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select value range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under100">Under $100</SelectItem>
                    <SelectItem value="100-300">$100 - $300</SelectItem>
                    <SelectItem value="300-500">$300 - $500</SelectItem>
                    <SelectItem value="over500">Over $500</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-2">
              <Label>Insurance Options</Label>
              <div className="flex items-center space-x-2">
                <Checkbox id="basic-insurance" defaultChecked />
                <label
                  htmlFor="basic-insurance"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Basic Insurance (up to $200) - Included
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="extended-insurance" />
                <label
                  htmlFor="extended-insurance"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Extended Insurance (up to $500) - $10
                </label>
              </div>
            </div>

            <div className="grid gap-2">
              <Label>Delivery Preferences</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select delivery method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="meet">Meet in person</SelectItem>
                  <SelectItem value="drop">Drop at hotel</SelectItem>
                  <SelectItem value="address">Deliver to address</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="special-instructions">Special Instructions</Label>
              <Textarea
                id="special-instructions"
                placeholder="Any special handling instructions or delivery notes"
                className="resize-none"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-sm font-medium">
          Estimated Cost: <span className="text-green-600">$10.00</span>
        </div>
        <Button>Request Booking</Button>
      </CardFooter>
    </Card>
  )
}
