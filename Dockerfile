FROM node:latest

WORKDIR /root/src

COPY . ./

RUN npm i -g yarn

RUN yarn install
