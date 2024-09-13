/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,   // Enables React strict mode for highlighting potential issues
  
  // Optional: If using environment variables, ensure they are loaded correctly
  env: {
    MARKET_CHECK_KEY: process.env.MARKET_CHECK_KEY,  // Ensure your API key is available in Amplify
  },
 
};

export default nextConfig;
