import '../../styles/globals.css';
import {Inter, Manrope} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import Header from '../../components/header';
import Footer from '../../components/footer';
import TelegramButton from '../../components/telegram-button';

const inter = Inter({subsets: ['latin'], variable: '--font-sans'});
const manrope = Manrope({subsets: ['latin'], variable: '--font-heading'});

export default async function LocaleLayout({children, params}: {children: React.ReactNode; params: {locale: string}}) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={params.locale} className={`${inter.variable} ${manrope.variable}`}> 
      <body className="min-h-screen bg-background text-white">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <TelegramButton className="fixed bottom-4 right-4 sm:hidden" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
