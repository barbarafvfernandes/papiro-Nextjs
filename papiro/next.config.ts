import type { NextConfig } from "next";

const nextConfig: NextConfig = {
/* opções de configuração */
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.graphassets.com',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
