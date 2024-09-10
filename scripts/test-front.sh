#!/bin/zsh

frontend=$(tsc -p app/view/tsconfig.json --noEmit)

if [ $frontend = "" ]
  then
  node --experimental-vm-modules node_modules/jest/bin/jest.js --config app/view/jest.config.ts

else
  echo $frontend

fi