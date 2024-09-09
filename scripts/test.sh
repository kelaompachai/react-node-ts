#!/bin/zsh

# type checking
result=$(tsc -p app/controller/tsconfig.json --noEmit)

# echo "$result"

# echo $result
if [ "$result" = "" ]
then
echo "it works"

else
echo hello
fi


# jest
# node --experimental-vm-modules node_modules/jest/bin/jest.js