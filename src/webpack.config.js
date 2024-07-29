module.exports = {
    module: {
      rules: [
        {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            loader: 'file-loader',
            options: { name: '[name].[ext]', outputPath: 'fonts/', }
          }
      ],
    },
  };