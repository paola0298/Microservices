FROM node:10

# ADD ./nodejs-config.yml /usr/share/app/config/

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY ./ .

# CMD ["npm", "start"]
CMD npm start