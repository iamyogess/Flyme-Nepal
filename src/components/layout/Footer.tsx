import { Twitter, Linkedin, Facebook } from "lucide-react";

const solutionsLinks = [
  { label: "Small Business", href: "#" },
  { label: "Freelancers", href: "#" },
  { label: "Customers", href: "#" },
  { label: "Teams", href: "#" },
];

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Career", href: "#" },
  { label: "Contact", href: "#" },
];

const learnLinks = [
  { label: "Blog", href: "#" },
  { label: "E-books", href: "#" },
  { label: "Guides", href: "#" },
  { label: "Templates", href: "#" },
];

const socialLinks = [
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-10">
          {/* Logo and company info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-gray-900 rounded-sm"></div>
              <span className="text-xl font-semibold text-gray-900">Flyme</span>
            </div>
          </div>

          {/* Link columns */}
          <FooterColumn title="Solutions" links={solutionsLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Learn" links={learnLinks} />
        </div>

        {/* Social media and copyright */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center md:items-start">
          <p className="text-sm text-gray-500">
            &copy; Flyme {new Date().getFullYear()}. All Rights Reserved.
          </p>

          <div className="mt-4 md:mt-0">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <span className="text-sm text-gray-600 mr-4 mb-2 md:mb-0">
                Follow us on
              </span>
              <div className="flex space-x-4">
                {socialLinks.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-gray-500 hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumnProps = {
  title: string;
  links: FooterLink[];
};

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="col-span-1">
    <h3 className="font-medium text-gray-900 mb-4">{title}</h3>
    <ul className="space-y-3">
      {links.map(({ label, href }) => (
        <li key={label}>
          <a href={href} className="text-gray-600 hover:text-primary text-sm">
            {label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
