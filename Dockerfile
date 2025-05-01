# Use the official Node.js 18.17.0 image as the base
FROM node:18.20.7-bullseye
# Set the working directory inside the container
WORKDIR /website

# Copy package.json and package-lock.json to the working directory
COPY ./website/package*.json /website/

# Install dependencies
RUN npm install --legacy-peer-deps


# Copy the rest of the application code
COPY ./website .

# Create Build
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
