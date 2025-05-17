import React from 'react';
import { Check, X } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { Card, CardHeader, CardContent, CardFooter } from '../common/Card';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  highlighted?: boolean;
  buttonText?: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  name,
  price,
  description,
  features,
  highlighted = false,
  buttonText = 'Get started'
}) => {
  return (
    <Card className={`flex flex-col h-full ${highlighted ? 'border-blue-200 ring-1 ring-blue-200' : ''}`}>
      <CardHeader className={`${highlighted ? 'bg-blue-50' : ''}`}>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <div className="mt-2">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          {price !== 'Free' && <span className="text-gray-600 ml-2">/month</span>}
        </div>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0 mt-0.5" />
              )}
              <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-500'}`}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className={`${highlighted ? 'bg-blue-50' : ''}`}>
        <Button
          variant={highlighted ? 'primary' : 'outline'}
          fullWidth
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

const PricingPlans: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: 'Free',
      description: 'Perfect for personal use and basic needs.',
      features: [
        { name: 'Up to 5 static QR codes', included: true },
        { name: 'Basic customization options', included: true },
        { name: 'PNG & JPG export', included: true },
        { name: 'Community support', included: true },
        { name: 'Dynamic QR codes', included: false },
        { name: 'Edit QR codes after printing', included: false },
        { name: 'Custom logo insertion', included: false },
        { name: 'Analytics & tracking', included: false },
        { name: 'API access', included: false },
      ],
      highlighted: false,
      buttonText: 'Sign up free'
    },
    {
      name: 'Pro',
      price: '$19',
      description: 'For professionals and small businesses.',
      features: [
        { name: 'Unlimited static QR codes', included: true },
        { name: 'Up to 20 dynamic QR codes', included: true },
        { name: 'Advanced customization', included: true },
        { name: 'All file formats export', included: true },
        { name: 'Edit QR codes after printing', included: true },
        { name: 'Custom logo insertion', included: true },
        { name: 'Basic analytics', included: true },
        { name: 'Email support', included: true },
        { name: 'API access (100 calls/day)', included: false },
      ],
      highlighted: true,
      buttonText: 'Get started'
    },
    {
      name: 'Business',
      price: '$49',
      description: 'For teams and growing businesses.',
      features: [
        { name: 'Unlimited static QR codes', included: true },
        { name: 'Unlimited dynamic QR codes', included: true },
        { name: 'Premium customization', included: true },
        { name: 'All file formats export', included: true },
        { name: 'Edit QR codes after printing', included: true },
        { name: 'Custom logo insertion', included: true },
        { name: 'Advanced analytics & reports', included: true },
        { name: 'Priority support', included: true },
        { name: 'Full API access', included: true },
      ],
      highlighted: false,
      buttonText: 'Contact sales'
    }
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for you and start creating QR codes today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              highlighted={plan.highlighted}
              buttonText={plan.buttonText}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a custom plan for your enterprise?</p>
          <Button variant="ghost">Contact our sales team</Button>
        </div>
      </Container>
    </section>
  );
};

export default PricingPlans;