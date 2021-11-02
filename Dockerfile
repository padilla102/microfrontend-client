FROM node:14-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build -prod

#segunda etapa

FROM nginx:1.20.0-alpine

COPY --from=build-step /app/dist/microfrontend-client /usr/share/nginx/html

