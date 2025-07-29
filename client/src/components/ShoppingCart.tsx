import { useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import { Button } from "@/components/ui/button";
import { X, Trash2, Lock } from "lucide-react";

interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  product?: {
    id: string;
    title: string;
    price: string;
    imageUrl?: string;
  };
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
}

export default function ShoppingCart({ isOpen, onClose, cartItems }: ShoppingCartProps) {
  const { toast } = useToast();

  // Remove from cart mutation
  const removeFromCartMutation = useMutation({
    mutationFn: async (cartItemId: string) => {
      await apiRequest("DELETE", `/api/cart/${cartItemId}`);
    },
    onSuccess: () => {
      toast({
        title: "Removed from Cart",
        description: "Item has been removed from your cart.",
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
        description: "Failed to remove item from cart.",
        variant: "destructive",
      });
    },
  });

  // Calculate total
  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.product?.price || '0');
    return sum + (price * item.quantity);
  }, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-2xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Shopping Cart</h3>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Your cart is empty</p>
                <Button className="mt-4" onClick={onClose}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img 
                      src={item.product?.imageUrl || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=100&h=100"} 
                      alt={item.product?.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.product?.title}</h4>
                      <p className="text-sm text-gray-600">
                        ${parseFloat(item.product?.price || '0').toFixed(2)} × {item.quantity}
                      </p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeFromCartMutation.mutate(item.id)}
                      disabled={removeFromCartMutation.isPending}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {cartItems.length > 0 && (
            <div className="border-t p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-900">Total:</span>
                <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
              </div>
              <Button 
                className="w-full mb-3"
                onClick={() => window.location.href = "/checkout"}
              >
                Proceed to Checkout
              </Button>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <Lock className="w-4 h-4" />
                <span>Secure checkout with Stripe</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
