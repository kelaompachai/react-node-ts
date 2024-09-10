import path from 'path';
import { Configuration } from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';

const ENTRY: string = path.join(__dirname, 'app', 'view', 'index.tsx');
const EXIT: string = path.join(__dirname, 'app', 'view', 'dist')

// type Mode = 'production' | 'development';

// interface Env {
//   WEBPACK_BUNDLE: boolean,
//   WEBPACK_BUILD: boolean,
//   mode: Mode
// };

// interface Argv {
//   config: string[],
//   env: Env
// }

// may need to install @types/webpack for this to have any quality type checking
const webpackOptions = (env: any, argv: any): Configuration => {
  console.log(env);
  console.log(argv);

  return {
    entry: ENTRY,
    output: {
      path: EXIT,
      filename: 'bundle.js',
      clean: true
    },
    mode: argv.env.mode,
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
