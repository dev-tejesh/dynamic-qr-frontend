// import { useState } from "react";
import {
  CheckCircle,
  BarChart,
  Zap,
  Shield,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import Topnavbar from "../../components/Topnavbar";

export default function LandingPage() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Dynamic Content",
      description: "Update QR destinations anytime without reprinting codes",
    },
    {
      icon: <BarChart className="h-6 w-6 text-blue-600" />,
      title: "Advanced Analytics",
      description: "Track scans, locations, devices, and conversion metrics",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Enterprise Security",
      description: "SOC 2 compliant with 99.9% guaranteed uptime",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen flex flex-col">
      <Topnavbar/>
      {/* Hero Section */}
      <main className="flex-grow">
        <section className="py-12 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Drive engagement and track results with{" "}
                  <span className="text-blue-600">dynamic QR codes</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                  Create, manage, and analyze trackable QR codes, landing pages,
                  and short links for your marketing campaigns
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                  <a
                    href="/signup"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                  >
                    Start for free
                  </a>
                  <a
                    href="/demo"
                    className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                  >
                    Schedule a demo
                  </a>
                </div>
                {/* <div className="mt-8 text-gray-500 flex items-center justify-center md:justify-start">
                  <div className="flex flex-col items-center md:items-start">
                    <p className="font-medium text-lg">
                      <span className="text-blue-600 font-bold">1,226,644</span>{" "}
                      trackable QR codes created
                    </p>
                    <p className="font-medium text-lg">
                      <span className="text-blue-600 font-bold">
                        36,800,716
                      </span>{" "}
                      total scans and counting
                    </p>
                  </div>
                </div> */}
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-100 rounded-lg transform rotate-3"></div>
                  <div className="relative bg-white p-6 rounded-lg shadow-lg">
                    <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-md mb-4">
                      <img
                        src="/api/placeholder/500/375"
                        alt="QR code dashboard preview"
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="bg-gray-100 h-6 w-3/4 rounded mb-2"></div>
                    <div className="bg-gray-100 h-4 w-1/2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        {/* <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-gray-500 text-sm uppercase font-medium mb-6">
              Trusted by innovative teams at
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-8 bg-gray-200 w-32 rounded"></div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Features Section */}
        <section id="features" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Powerful QR code marketing tools
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to create, manage, and optimize your QR code
                campaigns
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="#pricing"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                See all features <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to supercharge your marketing with QR codes?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of marketers who are driving more engagement and
              gathering valuable insights with DynamicQR
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/signup"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 focus:outline-none"
              >
                Start for free
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 focus:outline-none"
              >
                Contact sales
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/enterprise"
                    className="hover:text-white transition-colors"
                  >
                    Enterprise
                  </a>
                </li>
                <li>
                  <a
                    href="/security"
                    className="hover:text-white transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/guides"
                    className="hover:text-white transition-colors"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a href="/api" className="hover:text-white transition-colors">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="/help"
                    className="hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/partners"
                    className="hover:text-white transition-colors"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/cookies"
                    className="hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/gdpr"
                    className="hover:text-white transition-colors"
                  >
                    GDPR Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="text-lg font-bold text-white mb-4 md:mb-0">
              DynamicQR
            </div>
            <div className="text-sm">
              © 2025 DynamicQR. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
