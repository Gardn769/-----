FROM node:16

WORKDIR /app

ARG NODE_ENV=production

COPY package*.json ./
RUN npm install
COPY src ./src

COPY . .
RUN npm i

CMD [ "npm", "run", "start" ]