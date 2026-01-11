import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CheckoutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <ShoppingCart className="w-12 h-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold font-headline">Checkout</CardTitle>
          <CardDescription className="text-muted-foreground">
            Página de checkout em construção.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
            <p className="text-center text-muted-foreground">
              Esta página ainda está em desenvolvimento. Em breve, você poderá finalizar sua compra aqui.
            </p>
          <Button asChild size="lg" className="w-full">
            <Link href="/">Voltar para o Início</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
