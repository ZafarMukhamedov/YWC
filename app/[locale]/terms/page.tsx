import {useTranslations} from 'next-intl';

export default function TermsPage() {
  const t = useTranslations('Terms');
  return <h1 className="py-20 text-center text-3xl font-heading">{t('title')}</h1>;
}
