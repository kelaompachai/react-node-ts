#!/bin/zsh

# my build is going to compile server typescript and emit it
tsc -p app/controller/tsconfig.json

# then bundle frontend typescript with webpack and emit that
webpack --config app/controller/webpack.config.ts

