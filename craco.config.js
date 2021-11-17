module.exports = {
  webpack: {
    configure: {
      optimization: {
        splitChunks: {
          chunks: "all",
          name: false,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all",
              enforce: true,
            },
          },
        },
      },
    },
  },
};
