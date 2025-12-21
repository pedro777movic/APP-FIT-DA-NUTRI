import { Recipe } from '@/lib/data';
import PageHeader from '../shared/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Check } from 'lucide-react';

interface RecipeDetailViewProps {
  recipe: Recipe;
  enhancedInstructions: string;
  categoryTitle: string;
}

export default function RecipeDetailView({
  recipe,
  enhancedInstructions,
  categoryTitle,
}: RecipeDetailViewProps) {
  return (
    <div className="container mx-auto max-w-4xl p-4 sm:p-6">
      <PageHeader title={categoryTitle} backHref={`/${recipe.categoria}`} />

      <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
        {recipe.titulo}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent">
              Ingredientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {recipe.ingredientes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent">
              Modo de Preparo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none text-foreground/90">
              {enhancedInstructions.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
