import { CATEGORIES, RECIPES } from '@/lib/data';
import { notFound } from 'next/navigation';
import AuthGuard from '@/components/shared/auth-guard';
import RecipeListView from '@/components/recipes/recipe-list-view';
import PageHeader from '@/components/shared/page-header';

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    category: category.slug,
  }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = CATEGORIES.find((c) => c.slug === params.category);

  if (!category) {
    notFound();
  }

  const recipes = RECIPES.filter((r) => r.categoria === category.slug).sort(
    (a, b) => a.titulo.localeCompare(b.titulo)
  );

  return (
    <AuthGuard categorySlug={category.slug}>
      <div className="container mx-auto max-w-4xl p-4 sm:p-6">
        <PageHeader title={category.title} />
        <RecipeListView recipes={recipes} categorySlug={category.slug} />
      </div>
    </AuthGuard>
  );
}
