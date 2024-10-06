FROM node:20.11.1-alpine

WORKDIR /frontend

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
