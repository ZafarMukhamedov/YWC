import {useTranslations} from 'next-intl';
import TelegramButton from '../../components/telegram-button';

export default function HomePage() {
  const t = useTranslations('Home');
  return (
    <section className="py-20 text-center">
      <h1 className="mb-4 text-4xl font-heading">{t('tagline')}</h1>
      <p className="mb-8">{t('description')}</p>
      <TelegramButton />
    </section>
  );
}
