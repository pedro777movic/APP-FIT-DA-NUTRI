import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';

interface PageHeaderProps {
  title: string;
  backHref?: string;
}

export default function PageHeader({ title, backHref = '/' }: PageHeaderProps) {
  return (
    <header className="flex items-center mb-8 relative">
      <Link href={backHref} passHref>
        <Button variant="ghost" size="icon" className="mr-4">
          <ArrowLeft className="h-6 w-6" />
          <span className="sr-only">Voltar</span>
        </Button>
      </Link>
      <h2 className="text-2xl font-headline font-semibold text-primary">
        {title}
      </h2>
    </header>
  );
}
