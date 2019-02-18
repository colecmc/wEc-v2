import path from 'path';

function webpackConfig(options) {
  const watch = options.mode === 'development';

  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['env'],
              },
            }],
        },
      ],
    },
    mode: options.mode,
    watch,
    devtool: 'source-map',
    entry: {
      'app': './src/js/wEc.js',
      'add-script-to-page': './src/js/add-script-to-page.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './dist/'),
    },
  };
}

export default webpackConfig;
