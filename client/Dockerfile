# ---------- Base Stage ----------
# This stage sets up the Node.js environment and installs dependencies.
FROM node:20 AS base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# ---------- Development Stage ----------
# This stage installs all dependencies and sets up the environment for development.
# It also copies the source code into the container and starts the development server.
FROM base AS development
ENV NODE_ENV=development
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"] 

# ---------- Build Stage ----------
# This stage copies the source code and runs the build script to generate static assets for production.
FROM base AS build
COPY . .
RUN npm run build

# -------- Production Stage --------
# This stage sets up the production environment. 
# It installs only production dependencies and copies the built files from the build stage.
# Uses a lightweight Nginx image and copies the built assets from the build stage to be served.
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]