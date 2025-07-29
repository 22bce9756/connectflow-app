import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

interface HeaderProps {
  cartItems: any[];
  onCartToggle: () => void;
}

export default function Header({ cartItems, onCartToggle }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">PremiumAccess</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Courses</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Tutorials</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Resources</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Plans</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  type="search" 
                  placeholder="Search content..." 
                  className="w-64 pl-10"
                />
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="relative"
              onClick={onCartToggle}
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartItems.length}
                </Badge>
              )}
            </Button>
            
            <Button 
              variant="ghost"
              onClick={() => window.location.href = "/api/logout"}
              className="hidden md:inline-flex"
            >
              Sign Out
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary">Courses</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary">Tutorials</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary">Resources</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary">Plans</a>
              <Button 
                variant="ghost"
                onClick={() => window.location.href = "/api/logout"}
                className="w-full justify-start px-3"
              >
                Sign Out
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
