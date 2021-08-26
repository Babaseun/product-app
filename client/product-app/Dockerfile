FROM node:12.18.3-alpine
WORKDIR /app/ui

COPY ./client/product-app .

RUN ["npm","install"]

EXPOSE 3000
CMD ["npm","start"]
