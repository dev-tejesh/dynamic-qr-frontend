import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Topnavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-700">DynamicQR</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-blue-700 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-blue-700 transition-colors"
            >
              Pricing
            </a>
            <a
              href="/login"
              className="text-gray-600 hover:text-blue-700 transition-colors"
            >
              Log in
            </a>
            <a
              href="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
            >
              Sign up
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-700 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4">
          <div className="flex flex-col space-y-3">
            <a
              href="#features"
              className="text-gray-600 hover:text-blue-700 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-blue-700 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="/login"
              className="text-gray-600 hover:text-blue-700 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </a>
            <a
              href="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
