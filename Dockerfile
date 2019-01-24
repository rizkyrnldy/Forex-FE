FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@2.1.3 -g --silent
ADD src /usr/src/app/src
ADD public /usr/src/app/public
CMD ["npm", "start"]