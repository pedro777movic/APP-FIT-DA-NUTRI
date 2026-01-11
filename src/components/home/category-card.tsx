'use client';

import type { Category } from '@/lib/data';
import { Lock, Unlock, ShoppingCart } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface CategoryCardProps {
  category: Category;
  isLocked: boolean;
  onClick: () => void;
}

export default function CategoryCard({
  category,
  isLocked,
  onClick,
}: CategoryCardProps) {
  const { Icon, title, description, checkoutUrl } = category;
  const router = useRouter();

  const handleBuyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = checkoutUrl;
  };

  return (
    <Card
      onClick={onClick}
      className={cn(
        'group relative cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        isLocked
          ? 'border-dashed border-muted-foreground/50'
          : 'border-primary/20 shadow-lg'
      )}
    >
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div className="flex flex-col">
          <CardTitle className="font-headline text-xl mb-1">{title}</CardTitle>
          <Icon className="h-8 w-8 text-accent mb-2" />
        </div>
        <div className="flex items-center gap-2">
          {isLocked ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={handleBuyClick}
                aria-label={`Comprar acesso para ${title}`}
              >
                <ShoppingCart className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Button>
              <Lock className="h-5 w-5 text-muted-foreground/80 shrink-0" />
            </>
          ) : (
            <Unlock className="h-5 w-5 text-accent shrink-0" />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
