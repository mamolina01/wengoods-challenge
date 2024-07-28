/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'stg-wengoods-assets.nyc3.digitaloceanspaces.com'
        }]
    }
};

export default nextConfig;