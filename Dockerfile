FROM node
ADD package.json /src/
RUN cd /src && npm install
ADD server.js /src/
ADD handlers/ /src/handlers
ADD socket/ /src/socket
WORKDIR /src
CMD ["npm", "start"]
EXPOSE 3030
