import type React from "react"
import { CreditCard, Wallet, CreditCardIcon } from "lucide-react"
import WidthWrapper from "./WidthWrapper"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="text-primary">{icon}</div>
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

const Experience: React.FC = () => {
  return (
    <WidthWrapper>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 border rounded-2xl shadow">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-10 mb-16">
          <div className="md:w-1/2">
            <h2 className="uppercase text-sm font-medium tracking-wider mb-3">Future Payment</h2>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              Experience that grows <br className="hidden md:block" /> with your scale.
            </h1>
          </div>
          <div className="md:w-1/2">
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reprehenderit sint quidem ab recusandae
              dolor animi similique ut molestiae consequatur! Ea officia ad iure mollitia placeat ipsam nostrum. Quam,
              earum!
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          <FeatureCard
            icon={<CreditCard className="h-6 w-6" />}
            title="Free transfers"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi doloribus deserunt! Maxime, error."
          />
          <FeatureCard
            icon={<Wallet className="h-6 w-6" />}
            title="Secure payments"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi doloribus deserunt! Maxime, error."
          />
          <FeatureCard
            icon={<CreditCardIcon className="h-6 w-6" />}
            title="Virtual cards"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi doloribus deserunt! Maxime, error."
          />
        </div>
      </div>
    </WidthWrapper>
  )
}

export default Experience
