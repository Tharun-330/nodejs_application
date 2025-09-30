# Use Node LTS
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy app code
COPY app ./app

# Expose port
EXPOSE 3000

# Run the app
CMD ["node", "app/index.js"]
