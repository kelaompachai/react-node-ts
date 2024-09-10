#!/bin/zsh

backend=$(tsc -p app/controller/tsconfig.json --noEmit)

if [ $backend = "" ]
  then
  node --experimental-vm-modules node_modules/jest/bin/jest.js --config app/controller/jest.config.ts

else
  echo $backend
  