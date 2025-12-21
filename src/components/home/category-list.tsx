'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CATEGORIES, type Category } from '@/lib/data';
import { useAuth } from '@/hooks/use-auth';
import CategoryCard from './category-card';
import LoginDialog from '../auth/login-dialog';
import { Skeleton } from '../ui/skeleton';

export default function CategoryList() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const router = useRouter();
  const { isUnlocked, isReady } = useAuth();

  const handleCardClick = (category: Category) => {
    if (isUnlocked(category.slug)) {
      router.push(`/${category.slug}`);
    } else {
      setSelectedCategory(category);
    }
  };

  const handleLoginSuccess = (slug: string) => {
    setSelectedCategory(null);
    router.push(`/${slug}`);
  };

  if (!isReady) {
    return (
      <div className="w-full max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
           <Skeleton key={i} className="h-48 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="w-full max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {CATEGORIES.map((category) => (
          <CategoryCard
            key={category.slug}
            category={category}
            isLocked={!isUnlocked(category.slug)}
            onClick={() => handleCardClick(category)}
          />
        ))}
      </div>
      <LoginDialog
        category={selectedCategory}
        isOpen={!!selectedCategory}
        onOpenChange={(isOpen) => !isOpen && setSelectedCategory(null)}
        onSuccess={handleLoginSuccess}
      />
    </>
  );
}
