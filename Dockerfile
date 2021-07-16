FROM node:12-alpine
RUN apk add --no-cache python g++ make
WORKDIR /moex
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]