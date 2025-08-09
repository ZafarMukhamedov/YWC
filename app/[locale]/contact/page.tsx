import {useTranslations} from 'next-intl';
import TelegramButton from '../../components/telegram-button';

export default function ContactPage() {
  const t = useTranslations('Contact');
  return (
    <div className="py-20 text-center">
      <h1 className="mb-4 text-3xl font-heading">{t('title')}</h1>
      <TelegramButton />
    </div>
  );
}
