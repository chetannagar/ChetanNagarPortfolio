# Use the official Node.js image as the base
FROM node:23-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Astro app
RUN npm run build

# Set the Host and the Port
ENV HOST=0.0.0.0
ENV PORT=4321

# Expose the port the app will run on
EXPOSE 4321

# Start the app
CMD ["node", "./dist/server/entry.mjs"]
