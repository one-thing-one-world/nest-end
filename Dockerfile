FROM node:16.14.1 as dev-stage
COPY . .
RUN npm i && npm run dev

EXPOSE 3000
