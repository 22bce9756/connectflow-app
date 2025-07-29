import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl?: string;
  featured?: boolean;
}

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  onAddToCart: (productId: string) => void;
  addingToCart?: boolean;
}

export default function ProductGrid({ products, loading, onAddToCart, addingToCart }: ProductGridProps) {
  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900">Featured Content</h3>
            <p className="mt-4 text-xl text-gray-600">Discover our most popular courses and tutorials</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <Skeleton className="w-full h-48 rounded-lg mb-4" />
                  <Skeleton className="h-6 mb-2" />
                  <Skeleton className="h-4 mb-4" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-9 w-24" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900">Featured Content</h3>
          <p className="mt-4 text-xl text-gray-600">Discover our most popular courses and tutorials</p>
        </div>
        
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                addingToCart={addingToCart}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
