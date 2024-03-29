FROM node:16-alpine AS base

# step1: install deps
FROM base AS deps
WORKDIR /app

# 의존성 관련 복사 및 설치
COPY yarn.lock ./
RUN yarn --frozen-lockfile;

# step2: next build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules .
COPY . .
RUN yarn build


FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]