#!/bin/zsh

tsc -p app/controller/tsconfig.json
tsc -p app/view/tsconfig.json
webpack --config app/controller/webpack.config.ts
# webpack something something something


# my build is going to compile server typescript and emit it
# then bundle frontend typescript with webpack and emit that
# then npm start will run the server