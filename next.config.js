const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
    webpack: (config, options) => {
        config.resolve.modules.push(path.resolve("./"));
        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
}

module.exports = withBundleAnalyzer(nextConfig)