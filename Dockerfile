# Install dependencies only when needed
FROM node:14.18.1 AS deps
ARG NEXT_PUBLIC_API_BASEURL
ARG NEXT_PUBLIC_BASEURL
RUN apt update  
RUN apt install libc6
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile  
RUN yarn add next@canary sharp

FROM node:14.18.1 AS builder
WORKDIR /app
# ARG NEXT_PUBLIC_API_BASEURL
# ARG NEXT_PUBLIC_BASEURL
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG MONGODB_URI
ENV MONGODB_URI=$MONGODB_URI
ARG NEXT_PUBLIC_STORAGE_KEY
ENV NEXT_PUBLIC_STORAGE_KEY=$NEXT_PUBLIC_STORAGE_KEY
ARG JWT_SERCERT_KEY
ENV JWT_SERCERT_KEY=$JWT_SERCERT_KEY

RUN yarn build

FROM node:14.18.1 AS runner
WORKDIR /app

ENV NODE_ENV production
# ARG NEXT_PUBLIC_API_BASEURL
# ARG NEXT_PUBLIC_BASEURL
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]