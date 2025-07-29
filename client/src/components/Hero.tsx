import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Hero() {
  return (
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
                onClick={() => window.location.href = "/subscribe"}
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
  );
}
