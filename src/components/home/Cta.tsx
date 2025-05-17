import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import Button from '../common/Button';

const Cta: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to create your first QR code?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get started for free today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                Create free account
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                Learn more
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-blue-200">
            Join thousands of businesses already using QRforge
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Cta;