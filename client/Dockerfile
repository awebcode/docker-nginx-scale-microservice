FROM node:current-alpine3.20

WORKDIR /usr/src/client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 6000
CMD [ "npm", "start" ]

