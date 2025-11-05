import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.tsx': {
        loaders: [
          {
            loader: './loader.js'
          }
        ]
      }
    }
  }
};

export default nextConfig;
