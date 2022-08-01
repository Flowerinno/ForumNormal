# pull official base image
FROM node:18.2.0
RUN npm install -g npm@8.9.0

# set working directory
WORKDIR /app


# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 
RUN npm install react-scripts@3.4.1 -g 

# add app
COPY . ./

RUN chown -R node /app/node_modules

USER node

# start app
CMD ["npm", "start"]
