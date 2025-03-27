# Use Node.js image
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# Copy project files
COPY . .
# COPY .env.production .env

RUN npm install next

# Install TypeScript globally
RUN npm install -g typescript

# Compile next.config.ts and ensure it remains an ES Module
# RUN npx tsc --module ESNext --target ESNext --skipLibCheck next.config.ts && mv next.config.js next.config.mjs

# RUN npx tsc --moduleResolution Node --skipLibCheck next.config.ts && mv next.config.js next.config.mjs

COPY next.config.mjs ./next.config.mjs


# # Compile TypeScript configuration files (including next.config.ts)
# RUN npx tsc next.config.ts --outDir . && mv next.config.js next.config.mjs

# Build the Next.js project
RUN npm run build

# Production Stage
FROM node:18-alpine AS runner
WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.mjs ./next.config.mjs
# COPY --from=builder /app/.env .env

EXPOSE 3000

CMD ["npm", "start"]

