import CategoryList from '@/components/home/category-list';
import { Leaf } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center p-4 sm:p-8">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Leaf className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold font-headline text-primary tracking-tight">
            Cantinho Fit da Nutri
          </h1>
        </div>
        <p className="max-w-xl text-muted-foreground">
          Seu organizador alimentar leve e diário. Escolha um momento do dia e
          siga o fluxo de receitas saudáveis.
        </p>
      </div>

      <CategoryList />
    </div>
  );
}
