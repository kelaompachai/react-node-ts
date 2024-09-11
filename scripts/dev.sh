#!/bin/zsh
tailwindcss -i app/view/input.css -o app/view/dist/output.css --watch=always &
nodemon app/controller/server/server.ts &
webpack watch --config webpack.config.ts --env mode=development &
wait

