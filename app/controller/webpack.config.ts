import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';

const ENTRY: string = path.join(__dirname, '..', '..', 'view', 'build', 'index.js');
console.log('ENTRY:', ENTRY);
const EXIT: string = path.join(__dirname, '..', '..', 'view', 'dist')
console.log('EXIT:', EXIT);


// may need to install @types/webpack for this to have any quality type checking
const webpackOptions = (env: any, argv: any): any => {
  console.log(env);
  console.log(argv);

  return {
    entry: ENTRY,
    output: {
      path: EXIT,
      filename: 'bundle.js',
      clean: true
    },
    module: {
      rules: [
        {
          test: /.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin()]
  };

};

export default webpackOptions;
