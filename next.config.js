/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        config.resolve = {
            ...config.resolve,
            fallback: {
                fs: false,
                net: false,
            },
        }
        return config
    },
}

module.exports = nextConfig
