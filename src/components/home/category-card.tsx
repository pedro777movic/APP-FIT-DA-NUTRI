
'use client';

import type { Category } from '@/lib/data';
import { Lock, Unlock, ShoppingBag } from 'lucide-react';
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

/**
 * COMPONENTE: CategoryCard
 * Responsável por exibir o acesso aos e-books.
 * Inclui o botão de checkout minimalista solicitado.
 */

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
    if (checkoutUrl && checkoutUrl !== '#') {
       window.location.href = checkoutUrl;
    } else {
      router.push('/checkout');
    }
  };

  return (
    <Card
      onClick={onClick}
      className={cn(
        'group relative overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 active:scale-95',
        isLocked
          ? 'border-dashed border-muted-foreground/30 bg-muted/10'
          : 'border-primary/20 bg-card shadow-xl border-2'
      )}
    >
      <CardHeader className="flex flex-row items-start justify-between gap-4 pb-2">
        <div className="flex flex-col gap-3">
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300",
            isLocked ? "bg-muted text-muted-foreground" : "bg-accent/20 text-accent"
          )}>
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="font-headline text-xl font-bold tracking-tight text-primary">
            {title}
          </CardTitle>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          {isLocked ? (
            <div className="flex flex-col gap-2 items-center">
              <Lock className="h-5 w-5 text-muted-foreground/50 shrink-0" />
              {checkoutUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0 rounded-full bg-white/80 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm border-primary/20"
                  onClick={handleBuyClick}
                  title="Adquirir Acesso"
                >
                  <ShoppingBag className="h-4 w-4" />
                </Button>
              )}
            </div>
          ) : (
            <div className="bg-accent/10 p-2 rounded-full">
               <Unlock className="h-5 w-5 text-accent shrink-0 animate-pulse" />
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        <CardDescription className="text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </CardDescription>
      </CardContent>

      {/* Efeito Visual Premium de Glow no hover */}
      {!isLocked && (
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </Card>
  );
}
