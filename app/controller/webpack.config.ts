import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';

const ENTRY: string = path.join(__dirname, '..', 'view', 'index.tsx');
const EXIT: string = path.join(__dirname, '..', 'view', 'dist')


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
          test: /.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }, {
              loader: 'ts-loader'
            }
          ]
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin()],
    resolve: {
      extensions: ['.jsx', '.tsx']
    }
  };

};

export default webpackOptions;
