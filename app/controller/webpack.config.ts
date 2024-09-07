import path from 'path';

// may need to install @types/webpack for this to have any quality type checking
const webpackOptions = (env: any, argv: any): any => {
  console.log(env);
  console.log(argv);

  return {
    entry: path.join(__dirname, '..', 'view', 'build', 'index.js'),
    output: {
      path: path.join(__dirname, '..', 'view', 'dist'),
      filename: 'bundle.js',
      clean: true
    }
  };

};

export default webpackOptions;
