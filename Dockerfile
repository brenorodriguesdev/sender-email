FROM node:16
WORKDIR /usr/src/smartprev
COPY ./package.json .
COPY ./node_modules ./node_modules
COPY ./dist ./dist
EXPOSE  5700
CMD npm start