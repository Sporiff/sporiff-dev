FROM node:lts-alpine AS runtime
WORKDIR /app

COPY . .

RUN npm install

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000
CMD ["npm","run","dev","--","--host"]