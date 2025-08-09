'use client';

import Link from 'next/link';
import {useLocale} from 'next-intl';
import {usePathname} from 'next/navigation';

const locales = ['ru', 'uz', 'en'];

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const segments = pathname.split('/').slice(2); // remove leading '' and locale
  const rest = segments.join('/');
  return (
    <div className="flex gap-1 text-sm">
      {locales.map((l) => (
        <Link key={l} href={`/${l}/${rest}`} className={l === locale ? 'underline' : 'hover:underline'}>
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
