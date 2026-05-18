import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/stevens-court",
        destination:
          "https://script.google.com/macros/s/AKfycbztCNfn0OHALEWIquvU8QnZfXrBn9bW6ulvwqKtMY3U3zlUp-iVk5j4WJ7akqzUY5nm/exec",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
