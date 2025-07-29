import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, Star, Check, Lock } from "lucide-react";

export default function Landing() {
  const [cartOpen, setCartOpen] = useState(false);

  const featuredProducts = [
    {
      id: "1",
      title: "Advanced Business Strategy",
      description: "Master strategic thinking and decision-making frameworks used by top executives.",
      price: "$99",
      imageUrl: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: "2", 
      title: "UI/UX Design Mastery",
      description: "Create beautiful, user-centered designs that convert and engage audiences.",
      price: "$129",
      imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: "3",
      title: "Full-Stack Development", 
      description: "Build modern web applications with the latest technologies and frameworks.",
      price: "$159",
      imageUrl: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: "4",
      title: "Digital Marketing Pro",
      description: "Scale your business with proven marketing strategies and growth hacking techniques.", 
      price: "$119",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    }
  ];

  const subscriptionPlans = [
    {
      name: "Basic",
      price: "$29",
      features: ["Access to 100+ courses", "Mobile app access", "Basic support"],
      popular: false
    },
    {
      name: "Pro", 
      price: "$59",
      features: ["Access to all 500+ courses", "Offline downloads", "Certificates", "Priority support"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99", 
      features: ["Everything in Pro", "Team collaboration", "Advanced analytics", "Dedicated support"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Emma Rodriguez",
      role: "Marketing Director",
      content: "The quality of content is exceptional. I've applied the strategies immediately and seen a 40% increase in our campaign performance.",
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b332c3e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Michael Chen", 
      role: "Software Engineer",
      content: "Best investment I've made for my career. The full-stack course helped me transition to a senior role with a significant salary increase.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Jessica Taylor",
      role: "UX Designer", 
      content: "The UI/UX design course completely changed how I approach user experience. My portfolio has never looked better and clients love my work now.",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-primary">PremiumAccess</h1>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">Courses</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">Tutorials</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">Resources</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">Plans</a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <Input 
                  type="search" 
                  placeholder="Search content..." 
                  className="w-64"
                />
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                className="relative"
                onClick={() => setCartOpen(!cartOpen)}
              >
                <ShoppingCart className="h-6 w-6" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  2
                </Badge>
              </Button>
              <Button onClick={() => window.location.href = "/api/login"}>
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Access Exclusive Premium Content
              </h2>
              <p className="mt-6 text-xl text-gray-600">
                Join thousands of professionals learning with our curated collection of expert courses, tutorials, and resources. Flexible payment options available.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4"
                  onClick={() => window.location.href = "/api/login"}
                >
                  Start 7-Day Free Trial
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  View Plans
                </Button>
              </div>
              <div className="mt-6 flex items-center space-x-6 text-sm text-gray-500">
                <span className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-accent" />
                  Cancel anytime
                </span>
                <span className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-accent" />
                  No setup fees
                </span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Students collaborating on laptops in modern workspace" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-gray-600 mt-2">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-gray-600 mt-2">Premium Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-gray-600 mt-2">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-gray-600 mt-2">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900">Featured Content</h3>
            <p className="mt-4 text-xl text-gray-600">Discover our most popular courses and tutorials</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src={product.imageUrl} 
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Person enjoying online learning on laptop in cozy home environment" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Learn at Your Own Pace</h3>
              <p className="text-xl text-gray-600 mb-8">
                Access our entire library of premium content anytime, anywhere. Download for offline viewing and track your progress across all devices.
              </p>
              <div className="space-y-4">
                {["Unlimited access to all content", "Mobile app with offline downloads", "Progress tracking and certificates"].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <Check className="w-6 h-6 text-accent mr-3" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Expert-Led Content</h3>
              <p className="text-xl text-gray-600 mb-8">
                Learn from industry leaders and subject matter experts who share their real-world experience and proven methodologies.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-gray-600">Expert Instructors</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional instructor presenting to engaged audience in modern classroom" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Successful business professional working confidently in modern office" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Advance Your Career</h3>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of professionals who have accelerated their careers and increased their earning potential through our comprehensive training programs.
              </p>
              <Card className="bg-gray-50 border-l-4 border-primary">
                <CardContent className="p-6">
                  <blockquote className="italic text-lg text-gray-700">
                    "This platform transformed my career. I got promoted within 6 months of completing the advanced courses."
                  </blockquote>
                  <footer className="mt-4 text-sm font-semibold text-gray-900">- Sarah Chen, Product Manager</footer>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900">Choose Your Plan</h3>
            <p className="mt-4 text-xl text-gray-600">Flexible payment options designed for every learning journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.popular ? 'border-2 border-primary shadow-xl' : 'shadow-lg'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-secondary text-white px-4 py-2">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h4>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="w-5 h-5 text-accent mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    onClick={() => window.location.href = "/api/login"}
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900">What Our Members Say</h3>
            <p className="mt-4 text-xl text-gray-600">Join thousands of satisfied learners worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-gray-50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.imageUrl} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">{testimonial.content}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Cart Sidebar */}
      {cartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setCartOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-2xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Shopping Cart</h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setCartOpen(false)}
                >
                  ×
                </Button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                      alt="Advanced Business Strategy course thumbnail" 
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Advanced Business Strategy</h4>
                      <p className="text-sm text-gray-600">$99</p>
                    </div>
                    <Button variant="ghost" size="icon" className="text-red-500">
                      ×
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                      alt="UI/UX Design Mastery course interface on laptop screen" 
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">UI/UX Design Mastery</h4>
                      <p className="text-sm text-gray-600">$129</p>
                    </div>
                    <Button variant="ghost" size="icon" className="text-red-500">
                      ×
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="border-t p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-900">Total:</span>
                  <span className="text-2xl font-bold text-primary">$228</span>
                </div>
                <Button 
                  className="w-full mb-3"
                  onClick={() => window.location.href = "/api/login"}
                >
                  Proceed to Checkout
                </Button>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <Lock className="w-4 h-4" />
                  <span>Secure checkout with Stripe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-2xl font-bold text-primary mb-4">PremiumAccess</h4>
              <p className="text-gray-300 mb-6 max-w-md">
                Empowering professionals worldwide with premium content and flexible learning solutions. Join the community of lifelong learners.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Courses</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Business Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design & UX</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm">
                © 2024 PremiumAccess. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <div className="flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-accent" />
                  <span className="text-sm text-gray-400">SSL Secured</span>
                </div>
                <div className="text-sm text-gray-400">Stripe Verified</div>
                <div className="text-sm text-gray-400">30-Day Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
