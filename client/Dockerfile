# ---------- Base Stage ----------
FROM node:20-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Build the React app for production
RUN npm run build

# -------- Production Stage --------
# Use Nginx to serve the built app
FROM nginx:alpine

# Copy the build folder from the build stage to Nginx's default serving location
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
