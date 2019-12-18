FROM node:12.14.0-alpine

WORKDIR /app

ENV TZ "Asia/Tokyo"
ENV HOST "0.0.0.0"

RUN apk update && \
    npm install -g npm yarn

COPY . /app

RUN yarn install

EXPOSE 8080
