#!/bin/zsh

nodemon app/controller/server/server.ts &
webpack watch --config webpack.config.ts --env mode=development &
wait

