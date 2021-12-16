FROM node:14

#create app directory
WORKDIR /AcceleratorApp

#copy package and package-lock json
COPY package*.json ./

#install packages
RUN npm install

#bundle
COPY . /AcceleratorApp

#daemon map the running port
EXPOSE 3000

#start service
CMD ["npm", "start"]