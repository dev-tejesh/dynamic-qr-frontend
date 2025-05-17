import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import Button from '../common/Button';

const Hero: React.FC = () => {
  const features = [
    'No registration required for basic use',
    'Unlimited static QR codes for free',
    'Customizable designs and colors',
    'Export in high resolution formats',
  ];

  return (
    <section className="pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Create <span className="text-blue-600">powerful QR codes</span> in seconds
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Generate beautiful, customizable QR codes for your business or personal use. Track analytics, edit designs, and manage all your QR codes in one place.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/signup">
                <Button size="lg" rightIcon={<ArrowRight size={18} />}>
                  Get started for free
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" size="lg">
                  See how it works
                </Button>
              </Link>
            </div>

            <div className="pt-6">
              <p className="text-sm font-medium text-gray-700 mb-3">
                Create your first QR code in under 60 seconds:
              </p>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Hero Image - QR code mockup */}
              <div className="bg-white rounded-2xl shadow-lg p-6 transform transition-transform hover:scale-105 duration-300">
                <div className="mb-4 flex justify-between items-center">
                  <div className="w-2/3">
                    <div className="h-4 w-36 bg-gray-200 rounded-full mb-2"></div>
                    <div className="h-3 w-24 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="h-8 w-24 bg-blue-500 rounded-md"></div>
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center p-5">
                  {/* Simulated QR code - Just a visual representation */}
                  <div className="w-full h-full p-3 bg-white rounded-md grid grid-cols-7 grid-rows-7 gap-1">
                    {Array.from({ length: 49 }).map((_, i) => {
                      // Creating a pattern that resembles a QR code
                      const isCorner = 
                        (i < 7 && (i < 3 || i > 3)) || 
                        (i > 41 && (i < 45 || i > 45)) || 
                        (i % 7 < 3 && (i < 21 || i > 27)) || 
                        (i % 7 > 3 && (i < 21 || i > 27));
                      
                      return (
                        <div 
                          key={i} 
                          className={`${isCorner || Math.random() > 0.6 ? 'bg-blue-600' : 'bg-transparent'} rounded-sm`}
                        ></div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-24 bg-gray-200 rounded-full"></div>
                    <div className="h-8 w-8 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="h-10 w-full bg-gray-100 rounded-md"></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 h-24 w-24 bg-purple-100 rounded-full z-[-1]"></div>
              <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-blue-100 rounded-full z-[-1]"></div>
              <div className="absolute top-1/2 -right-16 h-16 w-16 bg-teal-100 rounded-full z-[-1]"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;