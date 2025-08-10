import createMiddleware from 'next-intl/middleware';
import { locales } from './lib/locales';

export default createMiddleware({
  locales,
  defaultLocale: 'ru'
});

export const config = {
  matcher: ['/', '/(ru|uz|en)/:path*']
};
