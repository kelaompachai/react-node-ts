#!/bin/zsh

nodemon app/controller/server/server.ts &
webpack watch --config app/controller/webpack.config.ts