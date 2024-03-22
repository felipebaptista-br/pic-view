/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        ACCESS_KEY: process.env.ACCESS_KEY,
        SECRET_KEY: process.env.SECRET_KEY
    }
};

export default nextConfig;
