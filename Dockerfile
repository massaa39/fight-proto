# Dockerfile
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=base /app ./
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
