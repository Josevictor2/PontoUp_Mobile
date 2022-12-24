module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.jsx', '.js', '.ts', '.tsx'],
          alias: {
            '@types': './src/types',
            '@assets': './src/assets',
            '@components': './src/components',
            '@contexts': './src/contexts',
            '@helpers': './src/helpers',
            '@hooks': './src/hooks',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@services': './src/services',
            '@theme': './src/theme',
          },
        },
      ],
    ],
  };
};
