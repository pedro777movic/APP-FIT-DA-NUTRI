'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useAuth } from '@/hooks/use-auth';
import type { Category } from '@/lib/data';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const formSchema = z.object({
  email: z.string().min(1, 'Email é obrigatório.'),
  password: z.string().min(1, 'Senha é obrigatória.'),
});

interface LoginDialogProps {
  category: Category | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSuccess: (slug: string) => void;
}

export default function LoginDialog({
  category,
  isOpen,
  onOpenChange,
  onSuccess,
}: LoginDialogProps) {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (!category) return;
    
    setIsLoggingIn(true);
    
    // Simulate network delay for better UX
    setTimeout(() => {
      const success = login(category.slug, values.email, values.password);
      if (success) {
        toast({
          title: 'Acesso liberado!',
          description: `Bem-vindo(a) à seção ${category.title}.`,
        });
        onSuccess(category.slug);
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Acesso negado',
          description: 'Email ou senha inválidos. Tente novamente.',
        });
      }
      setIsLoggingIn(false);
    }, 500);
  };

  if (!category) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">{category.title}</DialogTitle>
          <DialogDescription>
            Insira o email e senha para acessar esta seção de receitas.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="seu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" className="w-full" disabled={isLoggingIn}>
                {isLoggingIn ? 'Entrando...' : 'Acessar'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
