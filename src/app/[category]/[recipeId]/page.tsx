import { CATEGORIES, RECIPES } from '@/lib/data';
import { notFound } from 'next/navigation';
import AuthGuard from '@/components/shared/auth-guard';
import { enhanceRecipeInstructions } from '@/ai/flows/enhance-recipe-instructions';
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

  let enhancedInstructions = recipe.modo_preparo;
  try {
    const result = await enhanceRecipeInstructions({
      instructions: recipe.modo_preparo,
    });
    enhancedInstructions = result.enhancedInstructions;
  } catch (error) {
    console.error('Falha no aprimoramento da IA, usando instruções originais:', error);
    // Fallback to original instructions is handled by the initial assignment
  }

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
