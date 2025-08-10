import {nextIntl} from 'next-intl/plugin';
import type {NextConfig} from 'next';

const withNextIntl = nextIntl();

const config: NextConfig = {
  experimental: {
    appDir: true
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Content-Security-Policy', value: "script-src 'self' 'nonce-PLACEHOLDER'; object-src 'none'" }
        ]
      }
    ];
  }
};

export default withNextIntl(config);
