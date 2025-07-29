import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl?: string;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
  addingToCart?: boolean;
}

export default function ProductCard({ product, onAddToCart, addingToCart }: ProductCardProps) {
  const defaultImages = [
    "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=300"
  ];

  const imageUrl = product.imageUrl || defaultImages[Math.floor(Math.random() * defaultImages.length)];

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardContent className="p-6">
        <div 
          className="relative mb-4"
          onClick={() => window.location.href = `/product/${product.id}`}
        >
          <img 
            src={imageUrl} 
            alt={product.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          {product.featured && (
            <Badge className="absolute top-2 right-2">Featured</Badge>
          )}
        </div>
        
        <div onClick={() => window.location.href = `/product/${product.id}`}>
          <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary transition-colors">
            {product.title}
          </h4>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ${typeof product.price === 'string' ? product.price.replace('$', '') : product.price}
          </span>
          <Button 
            size="sm"
            onClick={() => onAddToCart(product.id)}
            disabled={addingToCart}
          >
            {addingToCart ? "Adding..." : "Add to Cart"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}