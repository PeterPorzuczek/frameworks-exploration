FROM node:8

WORKDIR /app

COPY . /app

EXPOSE 3000

RUN npm install http-server -g

RUN npm install && npm run build

CMD http-server ./dist
