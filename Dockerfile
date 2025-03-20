# Use Node.js LTS version as the base image
FROM node:lts-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the entire project files to the container
COPY . .

# Build the Next.js application for production
RUN npm run build

# ---- Production Image ----
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Copy built files from builder stage
COPY --from=builder /app ./

# Install only production dependencies
RUN npm ci --only=production

# Expose the port used by Next.js
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
