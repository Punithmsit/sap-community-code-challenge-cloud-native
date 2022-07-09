# syntax=docker/dockerfile:1

FROM node:16.15.1
# FROM python:3-alpine3.9
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
CMD [ "node", "server.js" ]
