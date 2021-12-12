FROM node:16-buster

# Create app dir
WORKDIR /usr/src/app

# Install Application Dependencies
COPY package*.json ./
RUN npm ci --only=production

# Add Application Source
COPY . .

# Build Application
RUN npm run build

# Expose Port
EXPOSE 3000

# Run Application
CMD ["npm", "start"]