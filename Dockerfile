FROM node:20.11.1-alpine

# Set the working directory
WORKDIR /frontend

# Copy package.json and install dependencies
COPY package.json .

RUN npm install

# Copy the Prisma schema
COPY prisma/schema.prisma ./prisma/schema.prisma

# Generate Prisma client
RUN npx prisma generate

# Install global serve package for serving the app
RUN npm i -g serve

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Expose the necessary port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
