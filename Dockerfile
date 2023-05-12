FROM node:16
RUN mkdir -p /nest

COPY . ./
RUN npm install
CMD npm run start:dev

EXPOSE 3000
