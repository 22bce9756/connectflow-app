import { Lock } from "lucide-react";

export default function Footer() {
  return (
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
  );
}
