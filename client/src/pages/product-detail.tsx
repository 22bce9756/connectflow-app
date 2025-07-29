import { useEffect } from "react";
import { useParams } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id;
  const { toast } = useToast();
  const { isAuthenticated, isLoading } = useAuth();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
      return;
    }
  }, [isAuthenticated, isLoading, toast]);

  // Fetch product details
  const { data: product, isLoading: productLoading, error } = useQuery({
    queryKey: ["/api/products", productId],
    retry: false,
    enabled: !!productId,
  });

  // Fetch cart items for header
  const { data: cartItems } = useQuery({
    queryKey: ["/api/cart"],
    retry: false,
  });

  // Add to cart mutation
  const addToCartMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", "/api/cart", { productId, quantity: 1 });
    },
    onSuccess: () => {
      toast({
        title: "Added to Cart",
        description: "Product has been added to your cart.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
    },
    onError: (error) => {
      if (isUnauthorizedError(error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: "Failed to add product to cart.",
        variant: "destructive",
      });
    },
  });

  if (isLoading || productLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header cartItems={(cartItems as any[]) || []} onCartToggle={() => {}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Card>
            <CardContent className="p-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
              <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
              <Button onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItems={(cartItems as any[]) || []} onCartToggle={() => {}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button 
          variant="ghost" 
          onClick={() => window.history.back()}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <img 
              src={(product as any)?.imageUrl || "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=800&h=600"} 
              alt={(product as any)?.title || "Product"}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              {(product as any)?.featured && (
                <Badge className="mb-2">Featured</Badge>
              )}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{(product as any)?.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{(product as any)?.description}</p>
            </div>

            <div className="mb-8">
              <div className="text-4xl font-bold text-primary mb-4">
                ${parseFloat((product as any)?.price || "0").toFixed(2)}
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full"
                onClick={() => addToCartMutation.mutate()}
                disabled={addToCartMutation.isPending}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {addToCartMutation.isPending ? "Adding to Cart..." : "Add to Cart"}
              </Button>

              <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mb-2">
                    <span className="text-accent">✓</span>
                  </div>
                  <span>Instant Access</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mb-2">
                    <span className="text-accent">✓</span>
                  </div>
                  <span>Lifetime Updates</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mb-2">
                    <span className="text-accent">✓</span>
                  </div>
                  <span>Certificate</span>
                </div>
              </div>
            </div>

            {/* Course Content Preview */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What You'll Learn</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    Master the fundamental concepts and frameworks
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    Apply real-world strategies and best practices
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    Build practical skills through hands-on exercises
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    Get access to exclusive resources and templates
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
