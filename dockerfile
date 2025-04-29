# Use node 20 alpine as the base image
FROM node:20-alpine

# Create app group and app user
RUN addgroup -S app && adduser -S -G app app

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies with root permissions
RUN npm install

# Copy everything after installing dependencies
COPY . .

# Set permissions for the app directory and node_modules
RUN chown -R app:app /app && chmod -R 775 /app/node_modules

# Switch to non-root user AFTER setting permissions
USER app

# Expose Vite's default port
EXPOSE 5173

# Run Vite in development mode
CMD ["npm", "run", "dev"]
