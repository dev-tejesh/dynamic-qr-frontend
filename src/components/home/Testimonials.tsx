import React from 'react';
import { Star } from 'lucide-react';
import Container from '../common/Container';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  companyLogo?: string;
  rating?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, rating = 5 }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
      {rating > 0 && (
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
      )}
      <blockquote className="flex-1">
        <p className="text-gray-700 mb-4">"{quote}"</p>
      </blockquote>
      <div className="mt-6 flex items-center">
        <div className="h-10 w-10 rounded-full bg-gray-200 text-center flex items-center justify-center text-gray-700 font-medium">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "QRforge has completely transformed how we run our marketing campaigns. The ability to edit QR codes even after they've been printed has saved us thousands in reprinting costs.",
      author: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      rating: 5
    },
    {
      quote: "The analytics provided by QRforge give us incredible insights into our customer behavior. We can see exactly when and where our QR codes are being scanned.",
      author: "Michael Chen",
      role: "Product Manager, Retail Solutions",
      rating: 5
    },
    {
      quote: "As a small business owner, I appreciate how easy QRforge makes it to create professional-looking QR codes. The free tier has everything I need to get started.",
      author: "David Rodriguez",
      role: "Owner, Local Cafe",
      rating: 4
    },
    {
      quote: "We've integrated QRforge's API into our event management platform, and our clients love the seamless QR code generation. The support team has been incredibly helpful.",
      author: "Emma Wilson",
      role: "CTO, EventFlow",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by businesses worldwide</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers have to say about using QRforge for their QR code needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;