# use official node image as base

From node:18


# set working directory
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./


RUN npm install

# 4. Copy the rest of the app

COPY . .


# 5. Build the Vite app (outputs to /dist)

RUN npm run build 

# 6. Install a static server to serve the app
RUN npm install -g serv

EXPOSE 5173


# 8. Command to run the app
CMD ["serve", "-s", "dist", "-l", "5173"]