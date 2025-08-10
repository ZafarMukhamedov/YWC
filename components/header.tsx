import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import TelegramButton from './telegram-button';
import LocaleSwitcher from './locale-switcher';
import ThemeSwitcher from './theme-switcher';

export default function Header() {
  const t = useTranslations('Nav');
  const locale = useLocale();
  const nav = [
    {href: `/${locale}/services`, label: t('services')},
    {href: `/${locale}/industries`, label: t('industries')},
    {href: `/${locale}/cases`, label: t('cases')},
    {href: `/${locale}/blog`, label: t('blog')},
    {href: `/${locale}/careers`, label: t('careers')},
    {href: `/${locale}/contact`, label: t('contact')}
  ];
  return (
    <header className="flex items-center justify-between py-4">
      <Link href={`/${locale}`} className="flex items-center gap-2">
        <span className="font-heading text-xl">YWC</span>
      </Link>
      <nav className="hidden md:flex gap-4">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="hover:underline focus-visible:underline">
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <LocaleSwitcher />
        <ThemeSwitcher />
        <TelegramButton className="hidden sm:inline-flex" />
      </div>
    </header>
  );
}
