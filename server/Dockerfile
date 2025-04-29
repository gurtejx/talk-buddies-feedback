# ---------- Base Stage ----------
FROM node:20 AS base
WORKDIR /app
COPY package.json package-lock.json ./

# ---------- Dependencies Stage ----------
# Install ALL dependencies (only for build & dev stages)
FROM base AS deps
RUN npm install


# ---------- Development Stage ----------
FROM deps AS development
ENV NODE_ENV=development
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]


# ---------- Build Stage ----------
FROM deps AS build
COPY . .
# Generate production build (TypeScript to JavaScript)
RUN npm run build


# ---------- Production Stage ----------
FROM base AS production
ENV NODE_ENV=production
RUN npm ci --omit=dev
# Copy built JS files from build stage
COPY --from=build /app/build ./build
# Start the app
EXPOSE 3000
CMD ["npm", "run", "start"]
