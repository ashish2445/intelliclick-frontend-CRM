# # Use Node.js image
# FROM node:18-alpine AS builder

# # Set environment variables
# ENV NODE_ENV production
# ENV NEXT_PUBLIC_BASE_URL="https://crm-660080677559.asia-south1.run.app"

# WORKDIR /app

# # Install dependencies
# COPY package.json package-lock.json ./
# RUN npm ci --legacy-peer-deps

# # Copy project files
# COPY . .

# # Build the Next.js project
# RUN npm run build

# # Production Stage
# FROM node:18-alpine AS runner
# WORKDIR /app

# COPY --from=builder /app/package.json ./
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/node_modules ./node_modules

# EXPOSE 3000

# CMD ["npm", "start"]

# Use a lightweight Node.js image
FROM node:18-alpine

# Set environment variables
ENV NODE_ENV production
ENV NEXT_PUBLIC_BASE_URL="https://crm-660080677559.asia-south1.run.app"

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies (without dev dependencies)
RUN npm ci --omit=dev

# Copy the rest of the application
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

