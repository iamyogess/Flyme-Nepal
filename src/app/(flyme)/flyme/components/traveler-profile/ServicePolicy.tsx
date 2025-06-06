import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertCircle, CheckCircle2, CreditCard, FileText, ShieldCheck, XCircle } from "lucide-react"

export default function ServicePolicies() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center">
          <FileText className="h-5 w-5 mr-2 text-blue-600" />
          Service Policies
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="accepted-items">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-600" />
                Accepted Items
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="text-sm text-gray-600 space-y-1 pl-6 list-disc">
                <li>Electronics (phones, tablets, small gadgets)</li>
                <li>Clothing and accessories</li>
                <li>Documents and books</li>
                <li>Cosmetics (non-liquid)</li>
                <li>Small gifts and souvenirs</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="prohibited-items">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center">
                <XCircle className="h-4 w-4 mr-2 text-red-600" />
                Prohibited Items
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="text-sm text-gray-600 space-y-1 pl-6 list-disc">
                <li>Illegal substances or items</li>
                <li>Weapons or dangerous goods</li>
                <li>Perishable food items</li>
                <li>Liquids over 100ml</li>
                <li>Valuable items worth over $500</li>
                <li>Fragile items without proper packaging</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="payment-methods">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center">
                <CreditCard className="h-4 w-4 mr-2 text-purple-600" />
                Payment Methods
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="text-sm text-gray-600 space-y-1 pl-6 list-disc">
                <li>Credit/Debit Cards</li>
                <li>PayPal</li>
                <li>Bank Transfer</li>
                <li>Cash (in person delivery only)</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                50% payment required upfront, remaining 50% upon delivery confirmation.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="insurance">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center">
                <ShieldCheck className="h-4 w-4 mr-2 text-blue-600" />
                Insurance Coverage
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-600">
                All packages are insured up to $200 by default. Additional insurance available for purchase:
              </p>
              <ul className="text-sm text-gray-600 space-y-1 pl-6 list-disc mt-2">
                <li>Up to $500: +$10</li>
                <li>Up to $1000: +$20</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cancellation">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center">
                <AlertCircle className="h-4 w-4 mr-2 text-amber-600" />
                Cancellation Policy
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="text-sm text-gray-600 space-y-1 pl-6 list-disc">
                <li>7+ days before departure: 100% refund</li>
                <li>3-7 days before departure: 70% refund</li>
                <li>1-3 days before departure: 50% refund</li>
                <li>Less than 24 hours: No refund</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
