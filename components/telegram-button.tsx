'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {cn} from '@/lib/utils';

export default function TelegramButton({className, size = 'lg'}: {className?: string; size?: 'lg' | 'sm'}) {
  const t = useTranslations('Common');
  const sizes = size === 'lg' ? 'px-6 py-3 text-lg' : 'px-3 py-2 text-sm';
  return (
    <Link
      href="https://t.me/ywctech"
      className={cn(
        'rounded-2xl bg-accent text-white shadow hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        sizes,
        className
      )}
    >
      {t('telegram')}
    </Link>
  );
}
