import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <Leaf className="w-16 h-16 text-primary mb-4" />
      <h1 className="text-4xl font-bold font-headline mb-2">Página Não Encontrada</h1>
      <p className="text-muted-foreground mb-6">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Button asChild size="lg">
        <Link href="/">Voltar para o Início</Link>
      </Button>
    </div>
  );
}
