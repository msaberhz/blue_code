"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Product } from '@/lib/types';
import { useCartStore } from '@/stores/cart-store';
import { useToast } from '@/hooks/use-toast';
import { Input } from './ui/input';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const addItemToCart = useCartStore((state) => state.addItem);
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItemToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} has been added to your cart.`,
    });
    setQuantity(1);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-md hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
            <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                data-ai-hint={product.imageHint}
            />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle>{product.name}</CardTitle>
        <CardDescription className="mt-2">{product.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto flex-col items-start gap-4">
        <p className="text-2xl font-bold">
            ${product.price.toFixed(2)}
            {(product.id.includes('hosting') || product.id.includes('support')) && <span className="text-sm font-normal text-muted-foreground">/mo</span>}
        </p>
        <div className="flex items-center gap-2 w-full">
            <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="h-10 w-10" onClick={decrementQuantity}>
                    <Minus className="h-4 w-4" />
                </Button>
                <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    min="1"
                    className="w-16 h-10 text-center text-lg font-bold"
                />
                <Button variant="outline" size="icon" className="h-10 w-10" onClick={incrementQuantity}>
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
            <Button className="flex-grow" onClick={handleAddToCart} style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
            </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
