/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function (defaultPathMap) {
    // Delete any API routes from the static export
    delete defaultPathMap['/api/auth/*'];

    // Return the modified path map
    return defaultPathMap;
  },
};

export default nextConfig;
