FROM node:12.18.3-alpine
WORKDIR /app

COPY . .

RUN ["npm","install"]

EXPOSE 80
CMD ["npm","run","dev"]
