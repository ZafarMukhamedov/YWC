import {useTranslations} from 'next-intl';

export default function ServicesPage() {
  const t = useTranslations('Services');
  return <h1 className="py-20 text-center text-3xl font-heading">{t('title')}</h1>;
}
