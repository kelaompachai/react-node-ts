#!/bin/zsh

# type checking
backend=$(tsc -p app/controller/tsconfig.json --noEmit)
frontend=$(tsc -p app/view/tsconfig.json --noEmit)

# if there are no typechecking errors, run tests
if [ "$backend" = "" ] && [ "$frontend" = "" ]
  then
  node --experimental-vm-modules node_modules/jest/bin/jest.js


# if there are, print the errors to stdout
else
  if [ "$frontend" != "" ]
    then
    echo "$frontend"
  fi

  if [ "$backend" != "" ]
    then
    echo "$backend"
  fi
fi