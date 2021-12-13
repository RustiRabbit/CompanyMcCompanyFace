ARG BASE_IMAGE=node:16-alpine

# Build
FROM $BASE_IMAGE as builder
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN apk add --no-cache bash git

WORKDIR /app
COPY ./package*.json ./
RUN npm ci --mode=production
COPY . .
RUN npm run build

# Run
FROM $BASE_IMAGE
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]