'use client';

import { useState, useMemo } from 'react';
import type { Recipe } from '@/lib/data';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface RecipeListViewProps {
  recipes: Recipe[];
  categorySlug: string;
}

export default function RecipeListView({
  recipes,
  categorySlug,
}: RecipeListViewProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) =>
      recipe.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [recipes, searchTerm]);

  const getImage = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id) || PlaceHolderImages[0];
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Pesquisar receitas..."
          className="w-full pl-10 h-12 text-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {filteredRecipes.map((recipe) => {
            const image = getImage(recipe.imagem);
            return (
              <Link
                href={`/${categorySlug}/${recipe.id}`}
                key={recipe.id}
                passHref
              >
                <Card className="flex items-center p-4 transition-all duration-300 hover:shadow-lg hover:bg-accent/20 cursor-pointer">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    width={64}
                    height={64}
                    className="rounded-full object-cover mr-4 border-2 border-background shadow-sm"
                  />
                  <CardContent className="p-0">
                    <h3 className="font-headline font-semibold text-lg text-primary">
                      {recipe.titulo}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground">Nenhuma receita encontrada para sua busca.</p>
        </div>
      )}
    </div>
  );
}
