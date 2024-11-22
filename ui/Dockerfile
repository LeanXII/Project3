FROM node:18-alpine

WORKDIR /src/ui

COPY . /src/ui/

RUN npm install

EXPOSE 5173

CMD ["npm",  "run",  "dev"]