FROM node:10-alpine

COPY . .

RUN npm install
RUN npm run build
EXPOSE 9000
CMD ["node", "./server.js"] 