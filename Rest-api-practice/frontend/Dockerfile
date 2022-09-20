FROM node:16

WORKDIR /usr/src/app

# COPY package*.json ./
COPY . .

# RUN npm install
RUN npm install --legacy-peer-deps

EXPOSE 3000
CMD ["npm", "start", "--host", "0.0.0.0"]