# inherit from a existing image to add the functionality
FROM node20-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files into the image.
COPY package.json .


# Install the dependencies.
RUN npm install

# Copy the rest of the source files into the image.
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port on which the Next.js app will run
EXPOSE 4050

# Command to start the Next.js application
CMD [npm, start]