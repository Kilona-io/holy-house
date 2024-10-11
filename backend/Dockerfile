FROM node:18 AS development
WORKDIR /usr/app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

COPY config/serviceAccountKey.dev.json /usr/app/dist/config/
COPY config/serviceAccountKey.prod.json /usr/app/dist/config/

FROM node:18 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/app

COPY package*.json .

RUN npm ci --only=production

COPY --from=development /usr/app/dist ./dist

CMD ["node", "dist/index.js"]
