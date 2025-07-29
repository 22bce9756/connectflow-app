import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function SubscriptionPlans() {
  // Fetch subscription plans
  const { data: plans = [] } = useQuery({
    queryKey: ["/api/subscription-plans"],
    retry: false,
  });

  // Fallback to mock data if no plans in database
  const mockPlans = [
    {
      id: "basic",
      name: "Basic",
      price: "29.00",
      features: ["Access to 100+ courses", "Mobile app access", "Basic support"],
      popular: false,
      stripePriceId: "price_basic"
    },
    {
      id: "pro", 
      name: "Pro",
      price: "59.00",
      features: ["Access to all 500+ courses", "Offline downloads", "Certificates", "Priority support"],
      popular: true,
      stripePriceId: "price_pro"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "99.00", 
      features: ["Everything in Pro", "Team collaboration", "Advanced analytics", "Dedicated support"],
      popular: false,
      stripePriceId: "price_enterprise"
    }
  ];

  const displayPlans = (plans && Array.isArray(plans) && plans.length > 0) ? plans : mockPlans;

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900">Choose Your Plan</h3>
          <p className="mt-4 text-xl text-gray-600">Flexible payment options designed for every learning journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(displayPlans as any[]).map((plan: any) => (
            <Card key={plan.id} className={`relative ${plan.popular ? 'border-2 border-primary shadow-xl' : 'shadow-lg'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-secondary text-white px-4 py-2">Most Popular</Badge>
                </div>
              )}
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h4>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">
                    ${parseFloat(plan.price).toFixed(0)}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature: string) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-accent mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full"
                  onClick={() => window.location.href = `/subscribe?plan=${plan.id}`}
                >
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
