module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@app': './src/app',
            '@processes': './src/processes',
            '@pages': './src/pages',
            '@widgets': './src/widgets',
            '@features': './src/features',
            '@entities': './src/entities',
            '@shared': './src/shared',
            '@assets': './assets',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
      '@babel/plugin-proposal-export-namespace-from',
    ],
  }
}
