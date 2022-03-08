const path = require('path');
const { alias } = require("react-app-rewire-alias");

module.exports = {
  webpack: config => {
    alias({
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks/_exports'),
      '@context': path.resolve(__dirname, 'src/context/_exports'),
      '@common': path.resolve(__dirname, 'src/components/common/_exports'),
      '@layout': path.resolve(__dirname, 'src/components/layout/_exports'),
    })(config)

    return config;
  }
}