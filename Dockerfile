FROM node:10.14.1-alpine

WORKDIR /app

RUN apk update && \
    npm install -g npm yarn

ENV HOST 0.0.0.0
EXPOSE 8080
