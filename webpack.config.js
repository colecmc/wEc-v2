import path from 'path';

function webpackConfig(options) {
  const watch = options.mode === 'development';

  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
            },
          },
        },
      ],
    },
    mode: options.mode,
    watch,
    devtool: 'source-map',
    entry: './src/js/wEc.js',
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, './dist/'),
    },
  };
}

export default webpackConfig;
