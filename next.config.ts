import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/cheatcodes',
        destination: '/sidekick_insp1',
        permanent: true,
      },
      {
        source: '/cheatsheet',
        destination: '/sidekick_insp2',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
