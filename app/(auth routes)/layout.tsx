'use client';

import Loader from '@/components/Loader/Loader';
import { useRouter } from 'next/navigation';
import { startTransition, useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function PublicLayout({ children }: Props) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    router.refresh();

    startTransition(() => {
      setLoading(false);
    });
  }, [router]);

  return <>{loading ? <Loader /> : children}</>;
}
