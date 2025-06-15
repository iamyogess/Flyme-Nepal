import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, AlertCircle, Shield, Clock } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type VerificationStatus = "verified" | "pending" | "not_verified"

interface VerificationItem {
  type: string
  status: VerificationStatus
  verifiedDate?: string
  expiryDate?: string
}

const VerificationBadge = ({ status }: { status: VerificationStatus }) => {
  switch (status) {
    case "verified":
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
          <CheckCircle2 className="h-3 w-3 mr-1" /> Verified
        </Badge>
      )
    case "pending":
      return (
        <Badge variant="outline" className="bg-yellow-50 text-yellow-800 hover:bg-yellow-50">
          <Clock className="h-3 w-3 mr-1" /> Pending
        </Badge>
      )
    case "not_verified":
      return (
        <Badge variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-100">
          <AlertCircle className="h-3 w-3 mr-1" /> Not Verified
        </Badge>
      )
  }
}

export default function VerificationStatus() {
  const verifications: VerificationItem[] = [
    { type: "Government ID", status: "verified", verifiedDate: "2023-12-15" },
    { type: "Phone Number", status: "verified", verifiedDate: "2023-12-10" },
    { type: "Email", status: "verified", verifiedDate: "2023-12-05" },
    { type: "Background Check", status: "verified", verifiedDate: "2024-01-20" },
    { type: "Passport", status: "verified", verifiedDate: "2023-11-30", expiryDate: "2028-11-30" },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center">
          <Shield className="h-5 w-5 mr-2 text-blue-600" />
          Verification Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {verifications.map((item) => (
            <div key={item.type} className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">{item.type}</span>
              <div className="flex items-center gap-2">
                {item.expiryDate && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="text-xs text-gray-500">
                          Expires: {new Date(item.expiryDate).toLocaleDateString()}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Verified on {new Date(item.verifiedDate!).toLocaleDateString()}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
                <VerificationBadge status={item.status} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
