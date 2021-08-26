FROM node:12.18.3-alpine
WORKDIR /app

COPY . .

RUN ["npm","install"]


CMD ["npm","run","dev"]
