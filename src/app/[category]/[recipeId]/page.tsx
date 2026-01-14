import { CATEGORIES, RECIPES } from '@/lib/data';
import { notFound } from 'next/navigation';
import AuthGuard from '@/components/shared/auth-guard';
import RecipeDetailView from '@/components/recipes/recipe-detail-view';

export async function generateStaticParams() {
  return RECIPES.map((recipe) => ({
    category: recipe.categoria,
    recipeId: recipe.id,
  }));
}

export default async function RecipePage({
  params,
}: {
  params: { category: string; recipeId: string };
}) {
  const category = CATEGORIES.find((c) => c.slug === params.category);
  const recipe = RECIPES.find(
    (r) => r.id === params.recipeId && r.categoria === params.category
  );

  if (!category || !recipe) {
    notFound();
  }

  // A chamada à IA foi removida para evitar erros de limite de requisição.
  // As instruções originais são usadas diretamente.
  const enhancedInstructions = recipe.modo_preparo;

  return (
    <AuthGuard categorySlug={category.slug}>
      <RecipeDetailView
        recipe={recipe}
        enhancedInstructions={enhancedInstructions}
        categoryTitle={category.title}
      />
    </AuthGuard>
  );
}
