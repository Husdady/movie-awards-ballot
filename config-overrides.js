const path = require('path');
// const { override, addWebpackAlias } = require('customize-cra');
const { alias } = require("react-app-rewire-alias");

// module.exports = override(
//   addWebpackAlias({
//     '@assets': path.resolve(__dirname, 'src/assets'),
//     '@styles': path.resolve(__dirname, 'src/styles'),
//     '@utils': path.resolve(__dirname, 'src/utils'),
//     '@hooks': path.resolve(__dirname, 'src/hooks'),
//     '@context': path.resolve(__dirname, 'src/context'),
//     '@common': path.resolve(__dirname, 'src/components/common'),
//     '@layout': path.resolve(__dirname, 'src/components/layout'),
//   })
// );

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

// module.exports = function override(config) {
//   config.resolve = {
//     ...config.resolve,
//     alias: {
//       ...config.alias,
//       '@assets': path.resolve(__dirname, 'src/assets'),
// 	    '@styles': path.resolve(__dirname, 'src/styles'),
// 	    '@utils': path.resolve(__dirname, 'src/utils'),
// 	    '@hooks': path.resolve(__dirname, 'src/hooks'),
// 	    '@context': path.resolve(__dirname, 'src/context'),
// 	    '@common': path.resolve(__dirname, 'src/components/common'),
// 	    '@layout': path.resolve(__dirname, 'src/components/layout'),
//     },
//   };

//   return config;
// };