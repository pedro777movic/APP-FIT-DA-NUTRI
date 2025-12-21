'use client';

import type { Category } from '@/lib/data';
import { Lock, Unlock } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

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
  const { Icon, title, description } = category;

  return (
    <Card
      onClick={onClick}
      className={cn(
        'group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
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
        {isLocked ? (
          <Lock className="h-5 w-5 text-muted-foreground/80 shrink-0" />
        ) : (
          <Unlock className="h-5 w-5 text-accent shrink-0" />
        )}
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
