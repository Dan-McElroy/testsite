FROM node:15 as base
WORKDIR /opt/app

FROM base AS deps
COPY package*.json ./
RUN npm install
COPY . ./

FROM deps AS development
EXPOSE 3000
CMD "npm" "run" "dev"