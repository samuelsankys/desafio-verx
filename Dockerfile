FROM node:18.17-alpine

WORKDIR /back

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3563
RUN npm install -g prisma
RUN npx prisma generate

CMD [ "npm", "run", "start" ]