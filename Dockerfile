# Use the official Node.js 14 image.
FROM node:14

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the main application.
COPY . .

# Build the React application.
WORKDIR /usr/src/app/client
COPY client/package*.json ./
RUN npm install
RUN npm run build

# Change back to the main application directory
WORKDIR /usr/src/app

# Your application's default port
EXPOSE 3000

# The command to run your application
CMD [ "node", "App.js" ]
