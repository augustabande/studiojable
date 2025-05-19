# Step 1: Use official Node.js image as base
FROM node:18-alpine AS build

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the source code
COPY . .

# Step 5: Build the Next.js project
RUN npm run build

# Step 6: Use a smaller Node image to serve the built app
FROM node:18-alpine

# Set working directory in production container
WORKDIR /app

# Copy only the necessary files from the build container
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
