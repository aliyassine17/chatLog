FROM node:10-alpine

COPY . .

RUN npm install
RUN npm build
EXPOSE 3000
CMD ["node", "./server.js"] 