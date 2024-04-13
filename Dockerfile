# Step 1: Build the React application

# Use an official Node.js runtime as a parent image
FROM node:16-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY package.json yarn.lock ./

# Install any needed packages specified in package.json
RUN yarn install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the React application
RUN yarn build

# Step 2: Serve the app with Nginx

# Use an official nginx image
FROM nginx:stable-alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

# Define command to run the app using CMD which defines your runtime
ENTRYPOINT ["nginx", "-g", "daemon off;"]
