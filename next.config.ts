import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/stevens-court",
        destination:
          "https://script.google.com/macros/s/AKfycbycVirFtJhh8unLbMe57YJanYtUYwksw1U8H0mKs5O-0Sbr2jEfE_LXu3Tqdn4XkggG/exec",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
