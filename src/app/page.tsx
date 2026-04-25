
import CategoryList from '@/components/home/category-list';
import { Leaf } from 'lucide-react';

/**
 * PÁGINA INICIAL (HOME)
 * Foco em clareza mental e recepção acolhedora.
 */

export default function Home() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center p-4 sm:p-8 animate-in fade-in duration-700">
      <div className="flex flex-col items-center text-center mb-12 mt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary p-2 rounded-2xl shadow-lg shadow-primary/20">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary tracking-tight">
            Cantinho Fit da Nutri
          </h1>
        </div>
        <p className="max-w-xl text-lg text-muted-foreground font-body">
          Seu organizador alimentar leve e diário. <br className="hidden sm:block" />
          Escolha um momento e siga o fluxo de receitas saudáveis.
        </p>
      </div>

      <div className="w-full max-w-4xl">
        <CategoryList />
      </div>

      <footer className="mt-auto py-8 text-center text-sm text-muted-foreground/60 font-body">
        &copy; {new Date().getFullYear()} Cantinho Fit da Nutri • Saúde em cada detalhe.
      </footer>
    </div>
  );
}
