FROM node:16.14.1 as production-stage
COPY . .
RUN npm i && npm run dev

EXPOSE 3000
