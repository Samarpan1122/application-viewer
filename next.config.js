module.exports = {
  reactStrictMode: true,
  webpack: function (config) {
    // Ensure the webpack configuration is properly structured with curly braces and commas
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader',
      type: 'json',
    });
    return config;
  },
};