# Stage 1: Build the React application
FROM node:16-alpine AS react-build
WORKDIR /app
COPY client/package.json client/package-lock.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Stage 2: Set up the Express server
FROM node:16-alpine
WORKDIR /usr/src/app
# Copy the built React app from the previous stage
COPY --from=react-build /app/build ./client/build
# Copy the package.json and package-lock.json for the Express server
COPY package*.json ./
# Install only production dependencies
RUN npm install --only=production
# Copy the rest of the backend source code
COPY . .

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD [ "node", "app.js" ]
