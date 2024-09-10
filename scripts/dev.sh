#!/bin/zsh

nodemon app/controller/server/server.ts &
webpack watch --config dumbpath/webpack.config.ts --env mode=development &
wait

