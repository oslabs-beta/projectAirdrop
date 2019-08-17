#Start FROM a baseline image of node v10.1
#
#Set up a WORKDIR for application in the container and set it to /usr/src/app.
#
#COPY all of your application files to the WORKDIR in the container
#
#RUN a command to npm install your node_modules in the container
#
#RUN a command to build your application in the container
#
#EXPOSE your server port (3000)
#
#Create an ENTRYPOINT where you'll run node ./server/server.js

FROM node:10.1
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm run build
EXPOSE 3000
ENTRYPOINT node ./server/server.js
#CMD node ./server/server.js
