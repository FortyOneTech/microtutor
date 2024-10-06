# auth-service/Dockerfile
FROM node:14

WORKDIR /app

COPY package.json ./

RUN npm install --prod

COPY . .

EXPOSE 5001

CMD ["npm", "start"]