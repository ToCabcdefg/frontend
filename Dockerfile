# Use the official Node.js 18 image as the base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 to access the app
EXPOSE 3000

# Set environment variables for production build
ENV NODE_ENV=production

# Build the Next.js app
RUN npm run build

# Start the Next.js app
CMD ["npm", "run", "start"]
