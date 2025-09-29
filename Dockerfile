# -------- Build Stage --------
FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# -------- Runtime Stage --------
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/build /app
EXPOSE 3000
CMD ["npx", "serve", "-s", "."]
