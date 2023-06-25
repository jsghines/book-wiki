FROM node:16-alpine

WORKDIR /src/app

COPY package.json yarn.lock tsconfig.json ./
RUN yarn install

COPY next.config.js ./next.connfig.js
COPY tailwind.config.js ./tailwind.connfig.js
COPY postcss.config.js ./postcss.connfig.js

COPY .next ./.next
COPY src ./src
COPY public ./public

CMD ["yarn","dev"]