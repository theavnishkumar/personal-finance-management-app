@echo off

cd server
start cmd /k "nodemon index.js"

cd ..

cd client
start cmd /k "npm run dev"
