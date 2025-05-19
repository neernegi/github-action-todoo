FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy the rest of the server code
COPY . .

# Expose backend port
EXPOSE 5000

# Start the server
CMD ["node", "index.js"]
