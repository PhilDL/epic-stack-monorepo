# This file is moved to the root directory before building the image

# pruner 
FROM node:18-bookworm-slim as pruner

# Install openssl for Prisma
RUN apt-get update && apt-get install -y fuse3 openssl sqlite3 ca-certificates
RUN corepack enable
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=@epic-stack-monorepo/epic-app --docker
RUN find . -name "node_modules" -type d -prune -exec rm -rf '{}' +

# base node image
FROM node:18-bookworm-slim as base
RUN apt-get update && apt-get install -y fuse3 openssl sqlite3 ca-certificates
RUN corepack enable
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml


FROM base AS dev-deps
WORKDIR /app
RUN pnpm install --ignore-scripts --no-frozen-lockfile

FROM base AS production-deps
WORKDIR /app
ENV NODE_ENV production
RUN pnpm install --prod --no-frozen-lockfile
COPY --from=pruner /app/out/full/apps/epic-app/prisma/schema.prisma /app/apps/epic-app/prisma/schema.prisma
RUN pnpm dlx prisma generate --schema /app/apps/epic-app/prisma/schema.prisma

FROM base AS builder
WORKDIR /app
RUN corepack enable
# ENV NODE_ENV production
COPY --from=pruner /app/out/full/ .
COPY --from=dev-deps /app/ .
COPY turbo.json turbo.json
RUN pnpm run generate
RUN pnpm run build --filter=@epic-stack-monorepo/epic-app...


# Finally, build the production image with minimal footprint
FROM base AS runner

ENV FLY="true"
ENV LITEFS_DIR="/litefs/data"
ENV DATABASE_FILENAME="sqlite.db"
ENV DATABASE_PATH="$LITEFS_DIR/$DATABASE_FILENAME"
ENV DATABASE_URL="file:$DATABASE_PATH"
ENV CACHE_DATABASE_FILENAME="cache.db"
ENV CACHE_DATABASE_PATH="/$LITEFS_DIR/$CACHE_DATABASE_FILENAME"
ENV INTERNAL_PORT="8080"
ENV PORT="8081"
ENV NODE_ENV="production"

# add shortcut for connecting to database CLI
RUN echo "#!/bin/sh\nset -x\nsqlite3 \$DATABASE_URL" > /usr/local/bin/database-cli && chmod +x /usr/local/bin/database-cli

WORKDIR /app

COPY --from=pruner /app/out/full/ .
COPY --from=production-deps /app .
COPY --from=builder /app/apps/epic-app/index.js ./apps/epic-app/index.js
COPY --from=builder /app/apps/epic-app/build ./apps/epic-app/build
COPY --from=builder /app/apps/epic-app/public ./apps/epic-app/public
COPY --from=builder /app/apps/epic-app/server-build ./apps/epic-app/server-build
# COPY --from=builder /app/apps/epic-app/app/components/ui/icons ./apps/epic-app/app/components/ui/icons

# prepare for litefs
COPY --from=flyio/litefs:0.5.5 /usr/local/bin/litefs /usr/local/bin/litefs
ADD ./apps/epic-app/other/litefs.yml /etc/litefs.yml
RUN mkdir -p /data ${LITEFS_DIR}

ADD . .

CMD ["litefs", "mount"]
