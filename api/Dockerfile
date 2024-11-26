FROM node:18-alpine

WORKDIR /src/app

COPY . /src/app

RUN npm i knex express-session

CMD ["npm" , "start"]