/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
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
