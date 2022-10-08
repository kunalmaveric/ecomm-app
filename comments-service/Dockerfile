FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN pwd
RUN npm install
COPY . .
EXPOSE 3002
ENV PORT=3002
RUN pwd
CMD ["node", "./bin/www"]
#CMD node server.js
EXPOSE 3002
