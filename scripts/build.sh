#!/bin/zsh

# my build is going to compile server typescript and emit it
tsc -p app/controller/tsconfig.json

# then bundle frontend typescript with webpack and emit that
webpack --config webpack.config.ts --env mode=production

# then create css file using tailwind
tailwindcss -i app/view/input.css -o app/view/dist/output.css -m
