// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/:path*",
        destination: "http://lunar-breeze-ws.onrender.com/:path*",
      }
    ];
  };
  return {
    rewrites,
  };
};

// ${process.env.NEXT_PUBLIC_BACKEND_URL}