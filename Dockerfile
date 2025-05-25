FROM node:18.19.0-slim AS base

# 시스템 패키지 설치
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

RUN npm uninstall -g yarn || true \
    && rm -f /usr/local/bin/yarn /usr/local/bin/yarnpkg || true

# npm 최신 버전으로 업그레이드 (10.2.3)
RUN npm install -g npm@10.2.3

# yarn 설치 (1.22.22)
RUN npm install -g yarn@1.22.22

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

# step3: production
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