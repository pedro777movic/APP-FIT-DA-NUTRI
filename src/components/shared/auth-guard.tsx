'use client';

import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface AuthGuardProps {
  children: React.ReactNode;
  categorySlug: string;
}

export default function AuthGuard({ children, categorySlug }: AuthGuardProps) {
  const { isUnlocked, isReady } = useAuth();
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (!isReady) return;

    if (!isUnlocked(categorySlug)) {
      router.replace('/');
    } else {
      setIsVerified(true);
    }
  }, [isReady, isUnlocked, categorySlug, router]);

  if (!isVerified) {
    return (
      <div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return <>{children}</>;
}
