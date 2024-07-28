# Sử dụng một image node phiên bản LTS (Long Term Support) làm cơ sở
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /usr/src/harry

# Install dependencies
RUN npm install -f

# Copy the local project files to the container
COPY . .

# Build the front-end
RUN npm run build

# Expose cổng mặc định của Next.js
EXPOSE 9090

# Specify the command to run on container start
CMD [ "npm", "run", "start" ]