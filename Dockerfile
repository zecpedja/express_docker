# Build stage
FROM node:14 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
WORKDIR /usr/src/app/client
RUN npm install && npm run build

# Runtime stage
FROM node:14-slim
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .
EXPOSE 3000
CMD [ "node", "App.js" ]
