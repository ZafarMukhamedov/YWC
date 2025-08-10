import {useTranslations} from 'next-intl';

export default function OfferPage() {
  const t = useTranslations('Offer');
  return <h1 className="py-20 text-center text-3xl font-heading">{t('title')}</h1>;
}
