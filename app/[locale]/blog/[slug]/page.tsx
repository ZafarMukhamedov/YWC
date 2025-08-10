import {useTranslations} from 'next-intl';

export default function BlogPostPage({params}: {params: {slug: string}}) {
  const t = useTranslations('Blog');
  return (
    <div className="py-20 text-center">
      <h1 className="mb-4 text-3xl font-heading">{t('title')}</h1>
      <p>{params.slug}</p>
    </div>
  );
}
