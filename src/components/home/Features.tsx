import React from 'react';
import { Smartphone, BarChart3, Palette, Zap, Lock, History } from 'lucide-react';
import Container from '../common/Container';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Static & Dynamic QR Codes',
      description: 'Create fixed static QR codes or dynamic ones you can edit anytime, even after printing.'
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Advanced Analytics',
      description: 'Track scans with detailed metrics on location, device, time, and user behavior.'
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Custom Design Options',
      description: 'Personalize your QR codes with colors, logos, shapes, and frames to match your brand.'
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Mobile Optimized',
      description: 'Direct users to responsive landing pages or apps for the best mobile experience.'
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Privacy & Security',
      description: 'Enterprise-grade security with password protection and expiration options.'
    },
    {
      icon: <History className="h-6 w-6" />,
      title: 'Bulk Management',
      description: 'Create, edit, and manage multiple QR codes at once to save time.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful features for every need</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform offers the perfect balance of simplicity and power, with all the tools you need to create effective QR code campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;