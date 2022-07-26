# pull official base image
FROM node:18-alpine3.15

# set working directory
WORKDIR /app


# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

RUN chown -R node /app/node_modules

USER node

# start app
CMD ["npm", "start"]