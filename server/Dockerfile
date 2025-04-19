# -------- Base Stage --------
ARG NODE_VERSION=22.14.0
FROM node:${NODE_VERSION}-alpine as base

WORKDIR /app

COPY package*.json ./

RUN npm install

# -------- Development Stage --------
FROM base AS development

ENV NODE_ENV=development

WORKDIR /app

COPY . .

RUN npm install --only=development

EXPOSE 3000

CMD ["npx", "run", "dev"]

# -------- Production Stage --------
FROM base AS production

ENV NODE_ENV=production

WORKDIR /app

COPY . .

RUN npm install --omit=dev
RUN npm run build

EXPOSE 3000

CMD ["node", "run", "start"]    
