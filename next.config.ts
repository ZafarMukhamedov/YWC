import {nextIntl} from 'next-intl/plugin';
import type {NextConfig} from 'next';

const withNextIntl = nextIntl();

const config: NextConfig = {
  experimental: {
    appDir: true
  }
};

export default withNextIntl(config);
