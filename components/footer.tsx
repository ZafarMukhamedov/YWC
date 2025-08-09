import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-center text-sm">
      <p className="mb-2">+998 99 791 55 41</p>
      <p className="mb-2">
        <a href="mailto:ywctechuz@gmail.com" className="underline">
          ywctechuz@gmail.com
        </a>
      </p>
      <p>Uzbekistan, Tashkent (online)</p>
    </footer>
  );
}
